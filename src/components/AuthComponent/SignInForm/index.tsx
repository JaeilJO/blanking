'use client';

// Utils
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useAlertStore } from '@/zustand/alertStore';
import { useState } from 'react';
import useIsLoading from '@/hooks/useIsLoading';

// Components
import Form from '../AuthCommon/Form';

function SignInForm() {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const router = useRouter();

    const { error, success, loading } = useAlertStore((state) => state);

    const { isLoading, setIsLoading } = useIsLoading('Sign In 중입니다', loading);

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
        <Form.FormWrapper onSubmit={onSubmit}>
            <Form.Input.EmailInput setForm={setForm} />
            <Form.Input.PasswordInput setForm={setForm} />

            <Form.SubmitButton disabeld={isLoading} value={'Sign In'} />
        </Form.FormWrapper>
    );
}

export default SignInForm;
