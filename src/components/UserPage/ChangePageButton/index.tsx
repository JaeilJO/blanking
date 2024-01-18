'use client';

import { BsPencil } from 'react-icons/bs';
import style from './index.module.scss';

function ChangePageButton({ setChangeMode }: { setChangeMode: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <button className={style.button} title="페이지 이름 변경하기" onClick={() => setChangeMode(true)}>
            <BsPencil />
        </button>
    );
}

export default ChangePageButton;
