'use client';

import style from './index.module.scss';
import { AiOutlineLoading } from 'react-icons/ai';

function ChangePasswordLoading() {
    return (
        <div className={style.loading_box}>
            <div className={style.loading_icon}>
                <AiOutlineLoading />
            </div>
        </div>
    );
}

export default ChangePasswordLoading;
