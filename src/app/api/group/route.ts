import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers';

export async function GET(req: Request, res: Response) {
    const cookie = cookies();

    const userid = Number(cookie.get('id')?.value);

    const prisma = new PrismaClient();

    const groups = await prisma.group.findMany({
        where: {
            userid: userid,
        },
    });

    return new Response(JSON.stringify(groups), { status: 200 });
}

export async function POST(req: Request) {}

export async function PATCH(request: Request) {}

export async function DELETE(request: Request) {}
