'use client';

// Utils
import { Dispatch, SetStateAction, useCallback, useRef, useState } from 'react';
import classNames from 'classnames/bind';

// Types
import { FormType } from '../formtype';

// Components
import InputLabel from '../InputLabel';

// Styles
import commonStyle from '../inputCommon.module.scss';

interface EamilInputProps {
    setForm: Dispatch<SetStateAction<any>>;
}

const cn = classNames.bind(commonStyle);

function EmailInput({ setForm }: EamilInputProps) {
    const [isValue, setIsValue] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const onBlur = useCallback(() => {
        if (inputRef.current?.value) {
            setIsValue(true);
        } else {
            setIsValue(false);
        }
    }, []);

    const onChange = (e: any) => {
        setForm((prev: FormType) => ({
            ...prev,
            email: e.target.value,
        }));
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (inputRef.current) {
                inputRef?.current.blur();
            }

            document.getElementById('submitBtn')?.click();
        }
    };
    return (
        <div className={commonStyle.input_wrapper}>
            <InputLabel title={'E-mail'} isValue={isValue} />

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
                    type={'email'}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </div>
    );
}

export default EmailInput;
