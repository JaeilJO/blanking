'use client';

import useForm from '@/hooks/useForm';

import style from './index.module.scss';

import { useRouter } from 'next/navigation';
import { useAlertStore } from '@/zustand/alertStore';
import Input from '../Form/Input';
import SubmitButton from '../Form/SubmitButton';

function SignUpForm() {
    const { defaultValues, register, resetInputValue } = useForm();

    const router = useRouter();

    const { error, success } = useAlertStore((state) => state);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(defaultValues),
            });
            success('회원가입이 완료되었습니다.');
            router.push('/auth/signin');
        } catch (err) {
            error('이미 사용되고 있는 이메일입니다.');
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
