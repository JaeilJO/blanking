import containsSpecialCharacters from '@/utils/containsSpecialCharacters';
import { Prisma, PrismaClient } from '@prisma/client';

// Get Page
/* 
    * 필요 데이터
        * groupname
            - params로 받음
            - string
        * pagename
            - params로 받음
            - string
*/
export async function GET(
    res: Response,
    { params }: { params: { subkey: string; groupname: string; pagename: string } }
) {
    const groupname = params.groupname;
    const pagename = params.pagename;
    const subkey = params.subkey;

    const prisma = new PrismaClient();

    const group = await prisma.group.findFirst({
        where: {
            usersubkey: subkey,
            groupname,
        },

        select: {
            id: true,
        },
    });

    const groupid = group?.id;

    if (!groupid) {
        return new Response('Group이 존재하지 않습니다', { status: 403 });
    }

    const page = await prisma.page.findMany({
        where: { groupid, pagename },
    });

    return new Response(JSON.stringify(page), { status: 201 });
}

// Change Page Name
export async function PATCH(
    req: Request,
    { params }: { params: { subkey: string; groupname: string; pagename: string } }
) {
    const requset = await req.json();
    const prisma = new PrismaClient();

    const new_pagename = requset.data.new_pagename;
    const pagename = params.pagename as string;
    const groupname = params.groupname as string;
    const subkey = params.subkey as string;

    const isContainsSpecialChariacter = containsSpecialCharacters(new_pagename);

    if (isContainsSpecialChariacter) {
        return new Response('특수문자는 사용할 수 없습니다.', { status: 422 });
    }

    if (new_pagename === pagename) {
        return new Response('기존 이름과 동일합니다.', { status: 423 });
    }

    const group = await prisma.group.findFirst({
        where: {
            usersubkey: subkey,
            groupname,
        },

        select: {
            id: true,
        },
    });

    const groupid = group?.id;

    if (!groupid) {
        return new Response('Group이 존재하지 않습니다', { status: 403 });
    }

    try {
        await prisma.page.update({
            where: {
                pagename_groupid: {
                    groupid,
                    pagename,
                },
            },
            data: {
                pagename: new_pagename,
            },
        });
        return new Response(`${pagename}이(가) ${new_pagename}으로 변경되었습니다`, { status: 200 });
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            if (e.code === 'P2002') {
                return new Response('이미 사용되고 있는 Page 이름입니다.', { status: 403 });
            }
        }

        return new Response('Page이름 변경에 실패했습니다. 다시 시도해주시겠습니까?', { status: 409 });
    }
}
