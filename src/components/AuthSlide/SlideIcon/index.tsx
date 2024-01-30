'use client';

import { BsMouse2 } from 'react-icons/bs';
import style from './index.module.scss';

function SlideIcon() {
    return (
        <div className={style.slide_icon}>
            <div>체험해보세요</div>
            <div className={style.icon}>
                <BsMouse2 />
            </div>
        </div>
    );
}

export default SlideIcon;
