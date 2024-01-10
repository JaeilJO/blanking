'use client';

import useForm from '@/hooks/useForm';
import Input from './Input';
import SubmitButton from './SubmitButton';
import style from './index.module.scss';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useAlertStore } from '@/zustand/alertStore';
import { compareSync } from 'bcrypt';

interface FormProps {
    formType: 'signin' | 'signup';
}

function Form({ formType }: FormProps) {
    const { defaultValues, register, resetInputValue } = useForm();
    const session = useSession();
    const router = useRouter();
    const { error, success } = useAlertStore((state) => state);
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formType === 'signup') {
            const res = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(defaultValues),
            });

            if (res.ok) {
                success('회원가입이 완료되었습니다.');
                router.push('/auth/signin');
            } else {
                error('이미 사용되고 있는 이메일입니다.');
            }
        } else {
            const res = await signIn('credentials', {
                ...defaultValues,
                redirect: false,
            });

            if (res?.ok) {
                const username = session.data?.user?.name;
                const useremail = session.data?.user?.email;
                success(`환영합니다 ${username}님`);
                router.push(`/user/${useremail}`);
            }
        }
        resetInputValue();
    };

    return (
        <>
            <form className={style.form_wrapper} onSubmit={onSubmit}>
                {formType === 'signup' && <Input type="Name" register={register} />}
                <Input type="E-mail" register={register} />
                <Input type="Password" register={register} />

                <SubmitButton value={formType === 'signin' ? 'Sign In' : 'Sign Up'} />
            </form>
        </>
    );
}

export default Form;
