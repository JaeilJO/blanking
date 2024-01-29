import checkName from '@/utils/checkName';
import checkPassword from '@/utils/checkPassword';
import containsSpecialCharacters from '@/utils/containsSpecialCharacters';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

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
    console.log('here');

    const { email, name, password } = await req.json();
    console.log(email, name, password);

    const prisma = new PrismaClient();

    // 유저 중복확인
    const user = await prisma.user.findFirst({
        where: {
            email,
            account_type: 'local',
        },
    });

    if (user) {
        return new Response('이미 존재하는 이메일입니다.', { status: 403 });
    }

    // 이름에 공백만 있는지 확인
    const checkedName = checkName(name);
    if (!checkedName) {
        return new Response('이름에 공백은 포함할 수 있지만, 공백만으로 이름을 지을 수 없습니다.', { status: 405 });
    }

    // 비밀번호 조건 충족 여부 확인
    const checkedPassword = checkPassword(password);
    if (!checkedPassword) {
        return new Response('비밀번호는 영문 대문자 혹은 소문자 중 하나 그리고 숫자를 조합시켜주세요', { status: 406 });
    }

    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const subkey = uuidv4();

        await prisma.user.create({
            data: {
                email,
                name,
                password: hash,
                subkey,
                account_type: 'local',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });

        return new Response('OK', { status: 200 });
    } catch (e) {
        return new Response('회원가입에 실패했습니다. 새로고침 후 다시 시도해주세요', { status: 407 });
    }
}
