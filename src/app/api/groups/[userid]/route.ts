import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { userid: string } }, res: Response) {
    const userid = Number(params.userid);

    const prisma = new PrismaClient();

    const groups = await prisma.group.findMany({
        where: {
            userid: userid,
        },
        include: {
            pages: true,
        },
    });

    return new Response(JSON.stringify(groups), { status: 200 });
}

export async function POST(req: Request, res: Response) {
    const data = await req.json();

    const userid = Number(data.id);
    const groupName = data.groupname;

    const prisma = new PrismaClient();

    try {
        await prisma.group.create({
            data: {
                groupname: groupName,
                userid,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });
        return new Response('OK', { status: 200 });
    } catch (e) {
        return new Response(e as string, { status: 403 });
    }
}

export async function PATCH(request: Request) {}

export async function DELETE(request: Request, { params }: { params: { userid: string } }) {
    const data = await request.json();

    const userid = Number(params.userid);
    const groupname = data.groupname;

    const prisma = new PrismaClient();

    try {
        await prisma.group.delete({
            where: {
                userid,
                groupname,
            },
        });
        return new Response('OK', { status: 200 });
    } catch (e) {
        return new Response(e as string, { status: 403 });
    }
}
