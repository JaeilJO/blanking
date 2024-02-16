'use client';

// Utils
import { Dispatch, SetStateAction, useCallback, useRef, useState } from 'react';
import classNames from 'classnames/bind';

// Style
import commonStyle from '../inputCommon.module.scss';

// Types
import { FormType } from '../formtype';

// Components
import InputLabel from '../InputLabel';

interface TextInputProps {
    title: string;
    setForm: Dispatch<SetStateAction<any>>;
}

const cn = classNames.bind(commonStyle);

function TextInput({ title, setForm }: TextInputProps) {
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
            [title.toLowerCase()]: e.target.value,
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
            <InputLabel title={title} isValue={isValue} />

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
                    type={title !== 'E-mail' ? 'text' : 'email'}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </div>
    );
}

export default TextInput;
