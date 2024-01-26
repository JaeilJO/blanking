'use client';

//Utils
import useForm from '@/hooks/useForm';
import { useRouter } from 'next/navigation';
import { useAlertStore } from '@/zustand/alertStore';
import axios from 'axios';

import style from './index.module.scss';

import Input from '../Form/Input';
import SubmitButton from '../Form/SubmitButton';

function SignUpForm() {
    const { defaultValues, register, resetInputValue } = useForm();

    const router = useRouter();

    const { error, success } = useAlertStore((state) => state);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await axios.post(`${process.env.NEXT_PUBLIC_SITE_URL}/api/signup`, {
                ...defaultValues,
            });
            success('회원가입이 완료되었습니다.');
            router.push('/auth/signin');
        } catch (e) {
            if (axios.isAxiosError(e)) {
                if (e.request?.status === 403) {
                    error('이미 존재하는 이메일 입니다');
                }

                if (e.request?.status === 405) {
                    error('이름에 공백은 포함할 수 있지만, 공백만으로 이름을 지을 수 없습니다');
                }

                if (e.request?.status === 406) {
                    error('비밀번호는 영문 대문자 혹은 소문자 중 하나 그리고 숫자를 조합시켜주세요');
                }

                if (e.request?.status === 407) {
                    error('회원가입에 실패했습니다. 새로고침 후 다시 시도해주세요');
                }
            }
        }

        resetInputValue();
    };

    return (
        <>
            <form className={style.form_wrapper} onSubmit={onSubmit}>
                <Input type="Name" register={register} />
                <Input type="E-mail" register={register} />
                <Input type="Password" register={register} />

                <SubmitButton value={'Sign Up'} />
            </form>
        </>
    );
}

export default SignUpForm;
