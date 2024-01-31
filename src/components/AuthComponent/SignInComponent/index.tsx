'use client';

import Link from 'next/link';
import style from './index.module.scss';
import { AuthComponent } from '../AuthCommon';
import social_login_list from '@/utils/socialLoginList';
import { useEffect, useRef, useState } from 'react';
import ScrollGuideBox from '../ScrollGuideBox';

function SignInComponent() {
    const [isHeightBelowMax, setIsHeightBelowMax] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const scrollHandler = () => {
        setIsHeightBelowMax(false);
    };

    useEffect(() => {
        const maxHeight = 820;

        const currentHeight = ref.current?.offsetHeight;

        if (currentHeight !== undefined && maxHeight > currentHeight) {
            setIsHeightBelowMax(true);
        }
    }, []);

    useEffect(() => {
        if (!isHeightBelowMax) {
            ref.current?.addEventListener('scroll', scrollHandler);
        }

        return () => ref.current?.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
        <div ref={ref} className={style.auth_wrapper}>
            <AuthComponent.Title title="Sign In" welcome_message="다시 찾아와 주셔서 감사합니다." />

            <AuthComponent.SignInForm />

            <Link className={style.link_text} href={'#'} title="아직 구현이 안됐습니다">
                비밀번호를 잊어버리셨나요?
            </Link>

            <AuthComponent.Social socials={social_login_list} />

            <AuthComponent.AccountInquery authType={'signin'} />

            {isHeightBelowMax && <ScrollGuideBox />}
        </div>
    );
}

export default SignInComponent;
