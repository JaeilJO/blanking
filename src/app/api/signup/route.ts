import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { email, name, password } = await req.json();
    const prisma = new PrismaClient();

    try {
        await prisma.user.create({
            data: {
                email,
                name,
                password,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });

        return new Response('OK', { status: 200 });
    } catch (e) {
        return new Response(e as string, { status: 403 });
    }
}
