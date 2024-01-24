import containsSpecialCharacters from '@/utils/containsSpecialCharacters';
import { Prisma, PrismaClient } from '@prisma/client';

// Change GroupName
/*
- 필요 데이터
    * subkey
        - params로 받음
        - string
    * groupname
        - params로 받음
        - string
*/
export async function PATCH(request: Request, { params }: { params: { subkey: string; groupname: string } }) {
    const requset = await request.json();
    const prisma = new PrismaClient();

    const groupname = params.groupname as string;
    const subkey = params.subkey as string;
    const new_groupname = requset.data.new_groupname;

    const isContainsSpecialChariacter = containsSpecialCharacters(new_groupname);

    if (isContainsSpecialChariacter) {
        return new Response('특수문자는 사용할 수 없습니다.', { status: 422 });
    }

    if (new_groupname === groupname) {
        return new Response('기존 이름과 동일합니다.', { status: 423 });
    }

    try {
        await prisma.group.update({
            where: {
                groupname_usersubkey: {
                    groupname,
                    usersubkey: subkey,
                },
            },
            data: {
                groupname: new_groupname,
            },
        });
        return new Response(`${groupname}이(가) ${new_groupname}으로 변경되었습니다.`, { status: 200 });
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            if (e.code === 'P2002') {
                return new Response('이미 사용되고 있는 Group 이름입니다.', { status: 403 });
            }
        }

        return new Response('Group이름 변경에 실패했습니다. 다시 시도해주시겠습니까?', { status: 409 });
    }
}

// Delete Group
/* 
- 필요 데이터
    * subkey
        - params로 받음
        - string
    * groupname
        - params로 받음
        - string
*/
export async function DELETE(request: Request, { params }: { params: { subkey: string; groupname: string } }) {
    const groupname = params.groupname as string;
    const subkey = params.subkey as string;
    const prisma = new PrismaClient();

    try {
        await prisma.group.delete({
            where: {
                groupname_usersubkey: {
                    groupname: groupname,
                    usersubkey: subkey,
                },
            },
        });
        return new Response('OK', { status: 200 });
    } catch (e) {
        return new Response('그룹 생성에 실패했습니다. 다시 시도해주시겠습니까?', { status: 403 });
    }
}
