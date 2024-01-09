'use client';

import useForm from '@/hooks/useForm';
import Input from './Input';
import SubmitButton from './SubmitButton';
import style from './index.module.scss';
import { SignInResponse, getProviders, signIn } from 'next-auth/react';

interface FormProps {
    formType: 'signin' | 'signup';
}

async function Form({ formType }: FormProps) {
    const { defaultValues, register, resetInputValue } = useForm();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const a = await signIn('credentials', {
            ...defaultValues,
            redirect: false,
        });

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
