'use client';

import { BsFillPlusCircleFill } from 'react-icons/bs';
import style from './index.module.scss';

function PageAddButton() {
    return (
        <button className={style.button_wrapper}>
            <span className={style.icon}>
                <BsFillPlusCircleFill />
            </span>
            <span>페이지 추가</span>
        </button>
    );
}

export default PageAddButton;
