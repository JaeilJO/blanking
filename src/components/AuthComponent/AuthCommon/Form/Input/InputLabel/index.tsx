'use client';

// Styles
import style from './index.module.scss';

// Utils
import classNames from 'classnames/bind';

interface InputLabelProps {
    title: string;
    isValue: boolean;
}

const cn = classNames.bind(style);

function InputLabel({ title, isValue }: InputLabelProps) {
    return (
        <label
            className={cn({
                input_title: true,
                has_value: isValue,
            })}
        >
            {title}
        </label>
    );
}

export default InputLabel;
