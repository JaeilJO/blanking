'use client';

import classNames from 'classnames/bind';
import stlye from './index.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useAlertStore } from '@/zustand/alertStore';

interface ToastAlertProps {
    status?: 'success' | 'error' | 'loading' | 'none';
    message?: string;
}

const cn = classNames.bind(stlye);

function ToastAlert() {
    const { status, message, reset } = useAlertStore((state) => state);

    useEffect(() => {
        setTimeout(() => {
            reset();
        }, 5000);
    }, [status]);

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
