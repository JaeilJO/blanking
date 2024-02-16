'use client';

// Utils
import { useEffect, useRef, useState } from 'react';

// Style
import style from './index.module.scss';

// Icons
import SlideIcon from './SlideIcon';

// Components
import { SlideItems } from './SlideItems';

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
