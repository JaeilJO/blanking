'use client';

import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/Logo.png';
import style from './index.module.scss';
import MobileModal from '../MobileModal';
import { useEffect, useState } from 'react';

function WelcomePage() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        let userAgent = navigator.userAgent;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
            setIsMobile(true);
        }
    }, []);

    return (
        <>
            {isMobile && <MobileModal />}
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
