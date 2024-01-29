import { PrismaClient } from '@prisma/client';
import { NextRequest } from 'next/server';

// Get Pages
export async function GET(req: NextRequest, { params }: { params: { subkey: string; groupname: string } }) {
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
