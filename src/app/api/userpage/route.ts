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

export async function DELETE(req: Request) {
    const request = await req.json();
    const pagename = request.pagename;
    const prisma = new PrismaClient();

    try {
        await prisma.page.delete({
            where: {
                pagename,
            },
        });
        return new Response('페이지가 삭제되었습니다.', { status: 200 });
    } catch (err) {
        return new Response('페이지 삭제에 실패하였습니다.', { status: 403 });
    }
}
