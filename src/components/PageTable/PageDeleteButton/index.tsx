'use client';

import { BsTrash3 } from 'react-icons/bs';
import style from './index.module.scss';
function PageDeleteButton() {
    return (
        <button className={style.page_info_icon}>
            <BsTrash3 />
        </button>
    );
}

export default PageDeleteButton;
