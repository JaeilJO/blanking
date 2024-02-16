'use client';

// Utils
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/Logo.png';

// Style
import style from './index.module.scss';

function WelcomePage() {
    return (
        <>
            <div className={style['welcome-wrapper']}>
                <Image className={style.logo} src={Logo} width={300} alt="Logo" />

                <div className={style['link-wrapper']}>
                    <Link className={style.link} href={'/auth/signin'}>
                        Sign In
                    </Link>
                    <Link className={style.link} href={'/auth/signup'}>
                        Sign Up
                    </Link>
                </div>
            </div>
        </>
    );
}

export default WelcomePage;
