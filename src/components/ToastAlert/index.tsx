'use client';

// Utils
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useAlertStore } from '@/zustand/alertStore';

// Style
import style from './index.module.scss';

// Icons
import { BsCheckCircle } from 'react-icons/bs';
import { BsDashCircle } from 'react-icons/bs';

const cn = classNames.bind(style);

function ToastAlert() {
    const { status, message, reset } = useAlertStore((state) => state);

    useEffect(() => {
        setTimeout(() => {
            reset();
        }, 5000);
    }, [status, reset]);

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
