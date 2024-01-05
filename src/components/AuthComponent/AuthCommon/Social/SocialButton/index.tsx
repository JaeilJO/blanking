'use client';

import style from './index.module.scss';

import { BsGoogle } from 'react-icons/bs';
import classNames from 'classnames/bind';

interface SocialButtonProps {
    socialType: string;
}

const cn = classNames.bind(style);

function SocialButton({ socialType }: SocialButtonProps) {
    const className = cn({
        social_button: true,
        google: socialType === 'google',
    });

    if (socialType === 'google') {
        return (
            <button className={className}>
                <BsGoogle />
            </button>
        );
    }
}

export default SocialButton;
