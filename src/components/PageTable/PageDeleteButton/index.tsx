'use client';

import { BsTrash3 } from 'react-icons/bs';
import style from './index.module.scss';
import Link from 'next/link';
function PageDeleteButton({ pagename }: { pagename: string }) {
    return (
        <Link
            href={{ pathname: `/user/deletepage`, query: { pagename: `${pagename}` } }}
            className={style.page_info_icon}
        >
            <BsTrash3 />
        </Link>
    );
}

export default PageDeleteButton;
