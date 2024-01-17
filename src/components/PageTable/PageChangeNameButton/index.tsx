'use client';

import { BsPencilSquare } from 'react-icons/bs';
import style from './index.module.scss';
import Link from 'next/link';
function PageChangeNameButton() {
    return (
        <Link href={'/user/changepagename'} className={style.page_info_icon}>
            <BsPencilSquare />
        </Link>
    );
}

export default PageChangeNameButton;
