'use client';

import { useEffect, useRef, useState } from 'react';
import SlideIcon from './SlideIcon';
import { SlideItems } from './SlideItems';
import style from './index.module.scss';

function AuthSlide() {
    const [isScroll, setIsScroll] = useState(false);
    const ref = useRef<HTMLUListElement>(null);
    const scrollEventHandle = () => {
        setIsScroll(true);
    };

    useEffect(() => {
        if (!isScroll) {
            ref.current?.addEventListener('scroll', scrollEventHandle);
        }

        return () => document.removeEventListener('scroll', scrollEventHandle);
    }, []);

    return (
        <ul ref={ref} className={style.slide_wrapper}>
            <SlideItems.Logo />
            <SlideItems.Example />
            {isScroll ? <></> : <SlideIcon />}
        </ul>
    );
}

export default AuthSlide;
