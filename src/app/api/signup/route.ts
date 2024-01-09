import { PrismaClient } from '@prisma/client';

export async function POST(req: Request) {
    const { email, name, password } = await req.json();
    const prisma = new PrismaClient();

    console.log(prisma);
    console.log(email, name, password);
}
