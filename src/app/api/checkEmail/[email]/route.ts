import { PrismaClient } from '@prisma/client';

export async function GET(request: Request, { params }: { params: { email: string } }) {
    const { email } = params;

    const prisma = new PrismaClient();

    const user = await prisma.user.findFirst({
        where: {
            email,
            account_type: 'credentials',
        },
        select: {
            email: true,
            subkey: true,
        },
    });

    if (!user) {
        return new Response('일치하는 이메일이 없습니다.', { status: 405 });
    }

    return new Response(JSON.stringify(user), { status: 203 });
}
