'use client';

import useForm from '@/hooks/useForm';
import Input from './Input';
import SubmitButton from './SubmitButton';
import style from './index.module.scss';
import { signIn } from 'next-auth/react';

interface FormProps {
    formType: 'signin' | 'signup';
}

function Form({ formType }: FormProps) {
    const { defaultValues, register, resetInputValue } = useForm();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
