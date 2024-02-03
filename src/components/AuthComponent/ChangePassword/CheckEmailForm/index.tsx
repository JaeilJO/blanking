'use client';

//Utils
import { useAlertStore } from '@/zustand/alertStore';
import axios from 'axios';
import { useState } from 'react';

//Components
import AuthCommon from '../../AuthCommon';
import ChangePasswordLoading from '../ChangePasswordLoading';
import Form from '../../AuthCommon/Form';

interface CheckEmailFormProps {
    form: { email: string; password: string };
    setForm: React.Dispatch<React.SetStateAction<{ email: string; password: string }>>;
    setMode: React.Dispatch<React.SetStateAction<'checkEmail' | 'changePassword'>>;
    setSubkey: React.Dispatch<React.SetStateAction<string>>;
}

function CheckEmailForm({ form, setForm, setMode, setSubkey }: CheckEmailFormProps) {
    const { error } = useAlertStore((state) => state);
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const user = await axios.get(`/api/checkEmail/${form.email}`);
            const userSubkey = user.data.subkey;

            setIsLoading(false);
            setSubkey(userSubkey);
            setMode('changePassword');
        } catch (e) {
            setIsLoading(false);
            error('이메일이 존재하지 않습니다');
        }
    };

    return (
        <div>
            <AuthCommon.Title
                title="비밀번호 찾기"
                welcome_message="비밀번호를 찾기 위해서는 이메일 확인이 필요합니다"
            />

            {isLoading ? (
                <ChangePasswordLoading />
            ) : (
                <Form.FormWrapper onSubmit={onSubmit}>
                    <Form.Input.EmailInput setForm={setForm} />
                    <Form.SubmitButton value="E-mail 확인" />
                    <AuthCommon.AccountInquery authType="changePassword" />
                </Form.FormWrapper>
            )}
        </div>
    );
}

export default CheckEmailForm;
