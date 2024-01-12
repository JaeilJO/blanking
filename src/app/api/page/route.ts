import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers';

export async function GET(req: Request, res: Response) {}

export async function POST(req: Request, res: Response) {
    const request = await req.json();

    const prisma = new PrismaClient();
    const group = await prisma.group.findUnique({
        where: {
            groupname: request.groupname,
        },
    });

    if (!group) {
        return new Response('유효하지 않는 Group입니다.', { status: 403 });
    }

    const groupid = group.id;
    const pagename = request.pagename;

    try {
        await prisma.page.create({
            data: {
                groupid,
                pagename,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });

        return new Response('페이지가 생성되었습니다.', { status: 200 });
    } catch (err) {
        return new Response('페이지 생성에 실패하였습니다.', { status: 403 });
    }
}

export async function PATCH(request: Request) {}

export async function DELETE(request: Request) {}
