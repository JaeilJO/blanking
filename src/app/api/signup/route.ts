import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

/* 
    * 필요 데이터
        * email
            - body로 받음
            - string
        * name
            - body로 받음
            - string
        * password
            - body로 받음
            - string
*/
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
