import { PrismaClient } from '@prisma/client';

export async function PATCH(
    req: Request,
    { params }: { params: { subkey: string; groupname: string; pagename: string } }
) {
    const requset = await req.json();

    const new_content = requset.data.new_content;
    const pagename = params.pagename as string;
    const groupname = params.groupname as string;
    const subkey = params.subkey as string;

    console.log(pagename, groupname, subkey);

    const prisma = new PrismaClient();

    const group = await prisma.group.findFirst({
        where: {
            groupname,
            usersubkey: subkey,
        },
    });

    const groupid = group?.id as number;

    try {
        await prisma.page.update({
            where: {
                pagename_groupid: {
                    pagename: pagename,
                    groupid: groupid,
                },
            },
            data: {
                content: [new_content],
            },
        });

        return new Response('Ok', { status: 200 });
    } catch (e) {
        console.log(e);
        return new Response('Error', { status: 403 });
    }
}
