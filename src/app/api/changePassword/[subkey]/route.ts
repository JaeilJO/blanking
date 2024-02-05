import checkPassword from '@/utils/checkPassword';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

export async function PATCH(request: Request, { params }: { params: { subkey: string } }) {
    const { subkey } = params;
    const { password } = await request.json();

    const prisma = new PrismaClient();

    // 비밀번호 유효성 검사
    const checkedPassword = checkPassword(password);

    if (!checkedPassword) {
        return new Response('비밀번호는 영문 대문자,소문자 하나 그리고 숫자를 조합시켜주세요', { status: 406 });
    }

    const userPassword = await prisma.user.findFirst({
        where: {
            subkey,
        },
        select: {
            password: true,
        },
    });

    // 현재 비밀번호와 동일한지 확인
    const isSameCurrentPassword = await bcrypt.compare(password, userPassword?.password as string);

    if (isSameCurrentPassword) {
        return new Response('최근에 사용한 비밀번호입니다.', { status: 403 });
    }

    try {
        const saltRounds = parseInt(process.env.SALT_ROUNDS as string);
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        await prisma.user.update({
            where: {
                subkey,
            },
            data: {
                password: hash,
            },
        });
        return new Response('비밀번호가 변경되었습니다. 다시 로그인을 시도해주세요', { status: 203 });
    } catch (e) {
        return new Response('알수없는 이유로 비밀번호 변경에 실패했습니다.', { status: 405 });
    }
}
