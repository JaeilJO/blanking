'use client';

import classNames from 'classnames/bind';
import stlye from './index.module.scss';
import { useEffect, useState } from 'react';
import { useAlertStore } from '@/zustand/alertStore';

interface ToastAlertProps {
    status?: 'success' | 'error' | 'loading' | 'none';
    message?: string;
}

const cn = classNames.bind(stlye);

function ToastAlert() {
    const { status, message, loading, success, error, reset } = useAlertStore((state) => state);
    console.log(status, loading);

    return (
        <div
            className={cn({
                toast_alert: true,
                success: status === 'success',
                error: status === 'error',
                loading: status === 'loading',
            })}
        >
            {message}
        </div>
    );
}

export default ToastAlert;
