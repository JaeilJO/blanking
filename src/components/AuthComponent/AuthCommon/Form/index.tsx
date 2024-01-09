'use client';

import useForm from '@/hooks/useForm';
import Input from './Input';
import SubmitButton from './SubmitButton';
import style from './index.module.scss';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface FormProps {
    formType: 'signin' | 'signup';
}

function Form({ formType }: FormProps) {
    const { defaultValues, register, resetInputValue } = useForm();
    const router = useRouter();
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formType === 'signup') {
            await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(defaultValues),
            })
                .then((res) => {
                    router.push('/auth/signin');
                })
                .catch((err) => {
                    console.log(err, 'err');
                });
        } else {
            const a = await signIn('credentials', {
                ...defaultValues,
                redirect: false,
            });
        }

        resetInputValue();
    };

    return (
        <form className={style.form_wrapper} onSubmit={onSubmit}>
            {formType === 'signup' && <Input type="Name" register={register} />}
            <Input type="E-mail" register={register} />
            <Input type="Password" register={register} />

            <SubmitButton value={formType === 'signin' ? 'Sign In' : 'Sign Up'} />
        </form>
    );
}

export default Form;
