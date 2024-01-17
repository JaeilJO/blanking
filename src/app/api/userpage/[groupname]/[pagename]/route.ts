import { PrismaClient } from '@prisma/client';

/* 
    * 필요 데이터
        * groupname
            - params로 받음
            - string
        * pagename
            - params로 받음
            - string
*/

export async function GET(res: Response, { params }: { params: { groupname: string; pagename: string } }) {
    const groupname = params.groupname;
    const pagename = params.pagename;

    const prisma = new PrismaClient();

    const group = await prisma.group.findUnique({
        where: {
            groupname,
        },
    });
    const groupid = group?.id;

    const page = await prisma.page.findMany({
        where: { groupid, pagename },
    });

    return new Response(JSON.stringify(page), { status: 200 });
}

export async function PATCH(req: Request, { params }: { params: { pagename: string } }) {
    const requset = await req.json();

    const new_pagename = requset.data.new_pagename;

    const pagename = params.pagename as string;

    const prisma = new PrismaClient();

    try {
        await prisma.page.update({
            where: {
                pagename: pagename,
            },
            data: {
                pagename: new_pagename,
            },
        });
        return new Response(`${pagename}이(가) ${new_pagename}으로 변경되었습니다`, { status: 200 });
    } catch (e) {
        return new Response('Group이름 변경에 실패했습니다', { status: 403 });
    }
}
