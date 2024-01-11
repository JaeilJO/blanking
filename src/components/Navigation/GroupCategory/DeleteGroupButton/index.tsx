'use client';

import { BsTrash3 } from 'react-icons/bs';
import style from './index.module.scss';

function DeleteGroupButton() {
    return (
        <button className={style.button} title="delete group">
            <BsTrash3 />
        </button>
    );
}

export default DeleteGroupButton;
