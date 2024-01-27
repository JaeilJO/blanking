'use client';

import SlideItemWrapper from '../../SlideItemWrapper';

import { Player, Controls } from '@lottiefiles/react-lottie-player';
import logoAnimation from '@/public/logo.json';
import { useEffect, useRef, useState } from 'react';

import style from './index.module.scss';

function Logo() {
    const animatioRef = useRef<Player>(null);
    const [stop, setStop] = useState(false);

    const onEvent = () => {
        if (animatioRef.current?.state.seeker === 20) {
            setStop(true);
        }
    };

    useEffect(() => {
        if (stop) {
            animatioRef.current?.pause();
        }
    }, [stop]);
    return (
        <SlideItemWrapper>
            <div className={style['player-wrapper']}>
                <Player
                    autoplay
                    ref={animatioRef}
                    src={logoAnimation}
                    onEvent={onEvent}
                    style={{ width: '100%', maxWidth: '800px' }}
                />
            </div>
        </SlideItemWrapper>
    );
}

export default Logo;
