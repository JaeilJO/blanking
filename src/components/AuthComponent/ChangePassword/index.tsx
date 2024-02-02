'use client';

import { useState } from 'react';

import CheckEmailForm from './CheckEmailForm';
import ChangePasswordForm from './ChangePasswordForm';

function ChangePassword() {
    const [mode, setMode] = useState<'checkEmail' | 'changePassword'>('checkEmail');
    const [isLoading, setIsLoading] = useState(false);
    const [subkey, setSubkey] = useState('');

    const [form, setForm] = useState({ email: '', password: '' });

    if (mode === 'checkEmail') {
        return <CheckEmailForm form={form} setForm={setForm} setMode={setMode} setSubkey={setSubkey} />;
    }

    if (mode === 'changePassword') {
        return (
            <ChangePasswordForm
                setIsLoading={setIsLoading}
                subkey={subkey}
                form={form}
                isLoading={isLoading}
                setForm={setForm}
            />
        );
    }
}

export default ChangePassword;
