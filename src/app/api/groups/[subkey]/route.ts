import { PrismaClient } from '@prisma/client';

import { NextRequest } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { subkey: string } }, res: Response) {
    const subkey = params.subkey;

    const prisma = new PrismaClient();

    const groups = await prisma.group.findMany({
        where: {
            usersubkey: subkey,
        },
        include: {
            pages: true,
        },
    });

    return new Response(JSON.stringify(groups), { status: 200 });
}

export async function POST(req: Request, { params }: { params: { subkey: string } }) {
    const data = await req.json();

    const subkey = params.subkey;

    const groupname = data.groupname;

    const prisma = new PrismaClient();

    try {
        await prisma.group.create({
            data: {
                groupname: groupname,
                usersubkey: subkey,
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

// export async function DELETE(request: Request, { params }: { params: { subkey: string } }) {
//     const data = await request.json();

//     const subkey = params.subkey;
//     const groupname = data.groupname;

//     const prisma = new PrismaClient();

//     try {
//         await prisma.group.delete({
//             where: {
//                 usersubkey: subkey,
//                 groupname,
//             },
//         });
//         return new Response('OK', { status: 200 });
//     } catch (e) {
//         return new Response(e as string, { status: 403 });
//     }
// }
