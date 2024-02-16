'use client';

// Utils
import classNames from 'classnames/bind';
import { signIn } from 'next-auth/react';

// Style
import style from './index.module.scss';

// Icons
import { BsGoogle } from 'react-icons/bs';

interface SocialButtonProps {
    socialType: string;
}

const cn = classNames.bind(style);

function SocialButton({ socialType }: SocialButtonProps) {
    const className = cn({
        social_button: true,
        google: socialType === 'google',
    });

    const onClick = () => {
        if (socialType === 'google') {
            signIn('google');
        }
    };

    if (socialType === 'google') {
        return (
            <button onClick={onClick} className={className}>
                <BsGoogle />
            </button>
        );
    }
}

export default SocialButton;
