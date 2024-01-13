'use client';

import { BsPencilSquare } from 'react-icons/bs';
import style from './index.module.scss';
function PageChangeNameButton() {
    return (
        <button className={style.page_info_icon}>
            <BsPencilSquare />
        </button>
    );
}

export default PageChangeNameButton;
