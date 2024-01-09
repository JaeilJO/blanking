'use client';

import useForm from '@/hooks/useForm';
import Input from './Input';
import SubmitButton from './SubmitButton';
import style from './index.module.scss';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useAlertStore } from '@/zustand/alertStore';

interface FormProps {
    formType: 'signin' | 'signup';
}

function Form({ formType }: FormProps) {
    const { defaultValues, register, resetInputValue } = useForm();
    const router = useRouter();
    const { loading, error, success } = useAlertStore((state) => state);
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

    const exampleLoading = (e: React.MouseEvent) => {
        e.preventDefault();
        loading('Loading');
    };

    return (
        <>
            <form className={style.form_wrapper} onSubmit={onSubmit}>
                {formType === 'signup' && <Input type="Name" register={register} />}
                <Input type="E-mail" register={register} />
                <Input type="Password" register={register} />

                <SubmitButton value={formType === 'signin' ? 'Sign In' : 'Sign Up'} />
            </form>
            <button onClick={exampleLoading}>Loading</button>
            <button>Error</button>
            <button>Success</button>
        </>
    );
}

export default Form;
