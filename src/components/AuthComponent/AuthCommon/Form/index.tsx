'use client';

import useForm from '@/hooks/useForm';
import Input from './Input';
import SubmitButton from './SubmitButton';
import style from './index.module.scss';

interface FormProps {
    formType: 'signin' | 'signup';
}

function Form({ formType }: FormProps) {
    const { defaultValues, register } = useForm();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(defaultValues);
    };

    return (
        <form className={style.form_wrapper} onSubmit={onSubmit}>
            <Input type="E-mail" register={register} />
            <Input type="Password" register={register} />
            <SubmitButton value={formType === 'signin' ? 'Sign In' : 'Sign Up'} />
        </form>
    );
}

export default Form;
