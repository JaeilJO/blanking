'use client';

import style from './index.module.scss';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useAlertStore } from '@/zustand/alertStore';

import SubmitButton from '../Form/SubmitButton';
import Input from '../Form/Input';
import { useEffect, useState } from 'react';

function SignInForm() {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const { error, success, loading } = useAlertStore((state) => state);

    useEffect(() => {
        if (isLoading) {
            loading('Loading...');
        }
    }, [isLoading]);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const res = await signIn('credentials', {
            ...form,
            redirect: false,
        });

        if (res?.ok) {
            setIsLoading(false);
            success(`환영합니다`);
            router.replace(`/user/`);
        }

        if (!res?.ok) {
            setIsLoading(false);
            error('이메일 혹은 비밀번호를 확인해주세요');
        }

        setForm({
            email: '',
            password: '',
        });
    };

    return (
        <>
            <form className={style.form_wrapper} onSubmit={onSubmit}>
                <Input.EmailInput setForm={setForm} />
                <Input.PasswordInput setForm={setForm} />

                <SubmitButton disabeld={isLoading} value={'Sign In'} />
            </form>
        </>
    );
}

export default SignInForm;
