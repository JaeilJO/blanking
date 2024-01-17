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
