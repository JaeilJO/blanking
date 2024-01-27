'use client';

// Utils
import { Dispatch, SetStateAction, useCallback, useRef, useState } from 'react';
import classNames from 'classnames/bind';

// Types
import { FormType } from '../formtype';

// Components
import InputLabel from '../InputLabel';

// Styles
import style from './index.module.scss';
import commonStyle from '../inputCommon.module.scss';

// Icons
import { BsEye, BsEyeSlash } from 'react-icons/bs';

interface PasswordInputProps {
    setForm: Dispatch<SetStateAction<any>>;
}

const cn = classNames.bind(commonStyle);

function PasswordInput({ setForm }: PasswordInputProps) {
    const [isHide, setIsHide] = useState(false);
    const [isValue, setIsValue] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const passwordHideHandler = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            setIsHide(!isHide);
        },
        [isHide]
    );

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();

            if (inputRef.current) {
                inputRef?.current.blur();
            }

            document.getElementById('submitBtn')?.click();
        }
    };

    const onBlur = () => {
        if (inputRef.current?.value) {
            setIsValue(true);
        } else {
            setIsValue(false);
        }
    };

    const onChange = (e: any) => {
        if (e.target.value) {
            setForm((prev: FormType) => ({
                ...prev,
                password: e.target.value,
            }));
        }
    };

    return (
        <div className={commonStyle.input_wrapper}>
            <InputLabel title="Password" isValue={isValue} />

            <div
                className={cn({
                    input_box: true,
                    has_value: isValue,
                })}
            >
                <input
                    onChange={onChange}
                    onBlur={onBlur}
                    required
                    ref={inputRef}
                    type={isHide ? 'text' : 'password'}
                    onKeyDown={handleKeyDown}
                />

                <button className={style.hide_button} onClick={passwordHideHandler}>
                    {isHide ? <BsEyeSlash /> : <BsEye />}
                </button>
            </div>
        </div>
    );
}

export default PasswordInput;
