import { PrismaClient } from '@prisma/client';

import { NextRequest } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { userid: string } }, res: Response) {}

export async function POST(req: Request, res: Response) {}

export async function PATCH(request: Request) {}

/* 
    * 필요 데이터
        * userid
            - params로 받음
            - string
        * groupname
            - body로 받음
            - string
*/
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
