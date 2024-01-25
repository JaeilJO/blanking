import { PrismaClient } from '@prisma/client';

export async function GET(res: Response) {}

export async function POST(req: Request, { params }: { params: { groupname: string } }) {
    const request = await req.json();

    const groupname = params.groupname;

    const pagename = request.data.pagename;
    const prisma = new PrismaClient();

    const group = await prisma.group.findUnique({
        where: {
            groupname,
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
    } catch (err) {
        return new Response('페이지 생성에 실패하였습니다.', { status: 403 });
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
