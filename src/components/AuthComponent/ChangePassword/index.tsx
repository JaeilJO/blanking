'use client';

import { useState } from 'react';
import style from './index.module.scss';
import AuthCommon from '../AuthCommon';
import Form from '../AuthCommon/Form';
import axios from 'axios';

function ChangePassword() {
    const [mode, setMode] = useState<'checkEmail' | 'changePassword'>('checkEmail');

    const [form, setForm] = useState({ email: '' });

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        axios.get(`/api/checkEmail/${form.email}`);
    };

    if (mode === 'checkEmail') {
        return (
            <div className={style.wrapper}>
                <AuthCommon.Title
                    title="비밀번호 찾기"
                    welcome_message="비밀번호를 찾기 위해서는 이메일 확인이 필요합니다"
                />
                <Form.FormWrapper onSubmit={onSubmit}>
                    <Form.Input.EmailInput setForm={setForm} />
                    <Form.SubmitButton value="E-mail 확인" />
                    <AuthCommon.AccountInquery authType="changePassword" />
                </Form.FormWrapper>
                <></>
            </div>
        );
    }

    if (mode === 'changePassword') {
        return (
            <div className={style.wrapper}>
                <div>
                    <div className={style.title}>비밀번호 변경</div>
                    <form className={style.form}>
                        <input
                            autoFocus
                            className={style.input}
                            type="password"
                            placeholder="Password를 입력해주세요"
                        />

                        <input className={style.submit_button} value="비밀번호 변경" type="submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default ChangePassword;
