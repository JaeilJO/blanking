'use client';

import { useEffect, useRef, useState } from 'react';
import { AuthComponent } from '../AuthCommon';
import style from './index.module.scss';
import ScrollGuideBox from '../ScrollGuideBox';

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
            <AuthComponent.Title title="Sign Up" welcome_message="환영합니다." />

            <AuthComponent.SignUpForm />

            <AuthComponent.Social socials={socials} />

            <AuthComponent.AccountInquery authType={'signup'} />

            {isHeightBelowMax && <ScrollGuideBox />}
        </div>
    );
}

export default SignUpComponent;
