import { PrismaClient } from '@prisma/client';

/* 
    * 필요 데이터
        * userid
            - params로 받음
            - string
        * groupname
            - body로 받음
            - string
*/
export async function POST(req: Request, { params }: { params: { userid: string } }, res: Response) {
    const data = await req.json();
    const userid = Number(params.userid);
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

export async function PATCH(request: Request, { params }: { params: { groupname: string } }) {
    const requset = await request.json();

    const new_groupname = requset.data.new_groupname;

    const groupname = params.groupname as string;

    const prisma = new PrismaClient();

    try {
        await prisma.group.update({
            where: {
                groupname: groupname,
            },
            data: {
                groupname: new_groupname,
            },
        });

        return new Response(`${groupname}이(가) ${new_groupname}으로 변경되었습니다`, { status: 200 });
    } catch (e) {
        return new Response('Group이름 변경에 실패했습니다', { status: 403 });
    }
}

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
