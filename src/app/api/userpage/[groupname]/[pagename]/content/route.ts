import { PrismaClient } from '@prisma/client';

export async function PATCH(req: Request, { params }: { params: { pagename: string } }) {
    const requset = await req.json();
    console.log(requset);
    const new_content = requset.data.new_content;

    const pagename = params.pagename as string;

    const prisma = new PrismaClient();

    try {
        await prisma.page.update({
            where: {
                pagename: pagename,
            },
            data: {
                content: new_content,
            },
        });

        return new Response('Ok', { status: 200 });
    } catch (e) {
        console.log(e);
        return new Response('Error', { status: 403 });
    }
}
