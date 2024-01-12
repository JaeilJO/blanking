import { PrismaClient, User } from '@prisma/client';
import { cookies } from 'next/headers';

function exclude({ user, keys }: { user: User; keys: string[] }) {
    return Object.fromEntries(Object.entries(user).filter(([key]) => !keys.includes(key)));
}

export async function GET(res: Response) {
    const prisma = new PrismaClient();
    const cookie = cookies();
    const userid = Number(cookie.get('userid')?.value);

    const user = await prisma.user.findUnique({
        where: {
            id: userid,
        },
        include: {
            groups: {
                include: {
                    pages: true,
                },
            },
        },
    });

    if (user) {
        const userWithoutPassword = exclude({ user, keys: ['password'] });
        return new Response(JSON.stringify(userWithoutPassword), { status: 200 });
    }
}
