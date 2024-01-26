'use client';

import useForm from '@/hooks/useForm';

import style from './index.module.scss';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useAlertStore } from '@/zustand/alertStore';
import Input from '../Form/Input';
import SubmitButton from '../Form/SubmitButton';

function SignInForm() {
    const { defaultValues, register, resetInputValue } = useForm();

    const router = useRouter();
    const { error, success } = useAlertStore((state) => state);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await signIn('credentials', {
            ...defaultValues,
            redirect: false,
        });

        if (res?.ok) {
            success(`환영합니다`);
            router.push(`/user/`);
        }

        if (!res?.ok) {
            error('이메일 혹은 비밀번호를 확인해주세요');
        }

        resetInputValue();
    };

    return (
        <>
            <form className={style.form_wrapper} onSubmit={onSubmit}>
                <Input type="E-mail" register={register} />
                <Input type="Password" register={register} />

                <SubmitButton value={'Sign In'} />
            </form>
        </>
    );
}

export default SignInForm;
