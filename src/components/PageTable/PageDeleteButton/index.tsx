'use client';

import { BsTrash3 } from 'react-icons/bs';
import style from './index.module.scss';
import Link from 'next/link';
function PageDeleteButton({ pagename, groupname }: { pagename: string; groupname: string }) {
    return (
        <Link
            href={{ pathname: `/user/deletepage`, query: { pagename: `${pagename}`, groupname: `${groupname}` } }}
            className={style.page_info_icon}
        >
            <BsTrash3 />
        </Link>
    );
}

export default PageDeleteButton;
