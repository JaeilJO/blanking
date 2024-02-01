'use client';

// Utils
import Link from 'next/link';
import social_login_list from '@/utils/socialLoginList';
import { useEffect, useRef, useState } from 'react';

// Style
import style from './index.module.scss';

// Components
import AuthCommon from '../AuthCommon';
import ScrollGuideBox from '../ScrollGuideBox';
import SignInForm from '../SignInForm';

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
            <AuthCommon.Title title="Sign In" welcome_message="다시 찾아와 주셔서 감사합니다." />

            <SignInForm />

            <Link className={style.link_text} href={'/auth/changePassword'}>
                비밀번호를 잊어버리셨나요?
            </Link>

            <AuthCommon.Social socials={social_login_list} />

            <AuthCommon.AccountInquery authType={'signin'} />

            {isHeightBelowMax && <ScrollGuideBox />}
        </div>
    );
}

export default SignInComponent;
