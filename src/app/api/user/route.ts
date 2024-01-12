import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers';

export async function GET(res: Response) {
    const prisma = new PrismaClient();
    const cookie = cookies();
    const userid = Number(cookie.get('userid')?.value);

    const user = await prisma.user.findUnique({
        where: {
            id: userid,
        },
        include: {
            groups: true,
        },
    });

    return new Response(JSON.stringify(user), { status: 200 });
}
