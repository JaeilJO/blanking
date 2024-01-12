import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers';

export async function GET(res: Response) {
    const cookieStore = cookies();

    const groupname = cookieStore.get('groupname')?.value as string;
    const pagename = cookieStore.get('pagename')?.value as string;

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
