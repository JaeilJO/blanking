import containsSpecialCharacters from '@/utils/containsSpecialCharacters';
import { PrismaClient } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

//Create Page
export async function POST(req: Request, { params }: { params: { subkey: string; groupname: string } }) {
    const request = await req.json();

    const groupname = params.groupname;
    const subkey = params.subkey;

    const pagename = request.data.pagename;
    const prisma = new PrismaClient();

    const isContainsSpecialChariacter = containsSpecialCharacters(pagename);

    if (isContainsSpecialChariacter) {
        return new Response('특수문자는 사용할 수 없습니다.', { status: 422 });
    }

    const group = await prisma.group.findFirst({
        where: {
            groupname,
            usersubkey: subkey,
        },
        select: {
            id: true,
        },
    });

    const groupid = group?.id as number;

    try {
        await prisma.page.create({
            data: {
                pagename,
                groupid,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });

        return new Response('페이지가 생성되었습니다.', { status: 200 });
    } catch (e) {
        if (e instanceof PrismaClientKnownRequestError) {
            if (e.code === 'P2002') {
                return new Response('이미 사용되고 있는 Page 이름입니다.', { status: 403 });
            }
        }

        return new Response('Page이름 변경에 실패했습니다. 다시 시도해주시겠습니까?', { status: 409 });
    }
}

//Delete Page
/* 
    * 필요 데이터
        * pagename
            - body로 받음
            - string
*/
export async function DELETE(req: Request, { params }: { params: { subkey: string; groupname: string } }) {
    const request = await req.json();
    const groupname = params.groupname;
    const pagename = request.pagename;
    const prisma = new PrismaClient();

    const gorup = await prisma.group.findFirst({
        where: {
            groupname: groupname,
            usersubkey: params.subkey,
        },

        select: {
            id: true,
        },
    });

    const groupid = gorup?.id as number;

    try {
        await prisma.page.delete({
            where: {
                pagename_groupid: {
                    groupid,
                    pagename,
                },
            },
        });
        return new Response('페이지가 삭제되었습니다.', { status: 203 });
    } catch (err) {
        return new Response('페이지 삭제에 실패하였습니다.', { status: 403 });
    }
}
