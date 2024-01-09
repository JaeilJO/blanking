'use client';

import classNames from 'classnames/bind';
import stlye from './index.module.scss';
import { useEffect, useState } from 'react';
interface ToastAlertProps {
    status?: 'success' | 'error' | 'loading' | 'none';
    message?: string;
}

const cn = classNames.bind(stlye);

function ToastAlert({ status = 'none', message }: ToastAlertProps) {
    useEffect(() => {
        if (status !== 'none') {
            setTimeout(() => {
                status = 'none';
            }, 2000);
        }
    }, [status]);

    return (
        <>
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
            <button></button>
        </>
    );
}

export default ToastAlert;
