import { PrismaClient } from '@prisma/client';

// Get Pages
export async function GET(res: Response, { params }: { params: { subkey: string; groupname: string } }) {
    const prisma = new PrismaClient();

    const group = await prisma.group.findFirst({
        where: {
            usersubkey: params.subkey,
            groupname: params.groupname,
        },
        include: {
            pages: true,
        },
    });

    const pages = group?.pages;

    return new Response(JSON.stringify(pages), { status: 200 });
}
