'use client';

import classNames from 'classnames/bind';
import style from './index.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useAlertStore } from '@/zustand/alertStore';

import { BsCheckCircle } from 'react-icons/bs';
import { BsDashCircle } from 'react-icons/bs';

interface ToastAlertProps {
    status?: 'success' | 'error' | 'loading' | 'none';
    message?: string;
}

const cn = classNames.bind(style);

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
            <span className={style.icon}>
                {status === 'success' ? <BsCheckCircle /> : status === 'error' ? <BsDashCircle /> : <></>}
            </span>
            <span>{message}</span>
        </div>
    );
}

export default ToastAlert;
