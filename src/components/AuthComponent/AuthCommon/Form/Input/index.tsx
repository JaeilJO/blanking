'use client';

import { useCallback, useRef, useState } from 'react';
import style from './index.module.scss';
import classNames from 'classnames/bind';

interface InputProps {
    type: string;
}

function Input({ type }: InputProps) {
    const cn = classNames.bind(style);
    const [isValue, setIsValue] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const onBlur = useCallback(() => {
        if (inputRef.current?.value) {
            setIsValue(true);
        } else {
            setIsValue(false);
        }
    }, [isValue]);

    if (type === 'email') {
        return (
            <div className={style.input_wrapper}>
                <label
                    htmlFor="email"
                    className={cn({
                        input_title: true,
                        has_value: isValue,
                    })}
                >
                    E-mail
                </label>

                <div
                    className={cn({
                        input_box: true,
                        has_value: isValue,
                    })}
                >
                    <input id="email" type="email" onBlur={onBlur} ref={inputRef} />
                </div>
            </div>
        );
    }

    if (type === 'password') {
        return (
            <div className={style.input_wrapper}>
                <label
                    htmlFor="password"
                    className={cn({
                        input_title: true,
                        has_value: isValue,
                    })}
                >
                    Password
                </label>

                <div
                    className={cn({
                        input_box: true,
                        has_value: isValue,
                    })}
                >
                    <input id="password" type="password" onBlur={onBlur} ref={inputRef} />
                </div>
            </div>
        );
    }

    return (
        <div className={style.input_wrapper}>
            <label
                htmlFor={type}
                className={cn({
                    input_title: true,
                    has_value: isValue,
                })}
            >
                Password
            </label>

            <div
                className={cn({
                    input_box: true,
                    has_value: isValue,
                })}
            >
                <input id={type} type="text" onBlur={onBlur} ref={inputRef} />
            </div>
        </div>
    );
}

export default Input;
