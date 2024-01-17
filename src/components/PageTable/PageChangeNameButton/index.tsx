'use client';

import { BsPencilSquare } from 'react-icons/bs';
import style from './index.module.scss';
import Link from 'next/link';
function PageChangeNameButton({ pagename, groupname }: { pagename: string; groupname: string }) {
    return (
        <Link
            href={{
                pathname: '/user/changepagename',
                query: {
                    pagename: `${pagename}`,
                    groupname: `${groupname}`,
                },
            }}
            className={style.page_info_icon}
        >
            <BsPencilSquare />
        </Link>
    );
}

export default PageChangeNameButton;
