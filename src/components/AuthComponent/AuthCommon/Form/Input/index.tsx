'use client';

import { useCallback, useRef, useState } from 'react';

import { BsEye } from 'react-icons/bs';
import { BsEyeSlash } from 'react-icons/bs';

import style from './index.module.scss';

import classNames from 'classnames/bind';

interface InputProps {
    type: 'E-mail' | 'Password' | 'Name';
    register: (name: string) => { onChange: (e: React.ChangeEvent<HTMLInputElement>) => void };
}

function Input({ type, register }: InputProps) {
    const cn = classNames.bind(style);

    const [isValue, setIsValue] = useState(false);
    const [isHide, setIsHide] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const passwordHideHandler = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            setIsHide(!isHide);
        },
        [isHide]
    );

    const onBlur = useCallback(() => {
        if (inputRef.current?.value) {
            setIsValue(true);
        } else {
            setIsValue(false);
        }
    }, [isValue]);

    return (
        <div className={style.input_wrapper}>
            <label
                className={cn({
                    input_title: true,
                    has_value: isValue,
                })}
            >
                {type}
            </label>

            <div
                className={cn({
                    input_box: true,
                    has_value: isValue,
                })}
            >
                {type === 'Password' && (
                    <>
                        <input
                            id="password"
                            type={isHide ? 'text' : 'password'}
                            onBlur={onBlur}
                            ref={inputRef}
                            required
                            {...register('password')}
                        />
                        <button className={style.hide_button} onClick={passwordHideHandler}>
                            {isHide ? <BsEyeSlash /> : <BsEye />}
                        </button>
                    </>
                )}

                {type === 'E-mail' && (
                    <input type="email" onBlur={onBlur} required ref={inputRef} {...register('email')} />
                )}

                {type === 'Name' && <input type="text" onBlur={onBlur} required ref={inputRef} {...register('name')} />}
            </div>
        </div>
    );
}

export default Input;
