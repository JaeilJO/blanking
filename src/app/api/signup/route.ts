import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function POST(req: Request) {
    const { email, name, password } = await req.json();
    const prisma = new PrismaClient();

    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        await prisma.user.create({
            data: {
                email,
                name,
                password: hash,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });

        return new Response('OK', { status: 200 });
    } catch (e) {
        return new Response(e as string, { status: 403 });
    }
}
