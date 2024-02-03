'use client';

import { useEffect, useRef, useState } from 'react';
import AuthCommon from '../AuthCommon';
import style from './index.module.scss';
import ScrollGuideBox from '../ScrollGuideBox';
import SignUpForm from '../SignUpForm';

const socials = ['google'];

function SignUpComponent() {
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
            <AuthCommon.Title title="Sign Up" welcome_message="환영합니다." />

            <SignUpForm />

            <AuthCommon.Social socials={socials} />

            <AuthCommon.AccountInquery authType={'signup'} />

            {isHeightBelowMax && <ScrollGuideBox />}
        </div>
    );
}

export default SignUpComponent;
