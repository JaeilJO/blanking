'use client';

// Utils
import Link from 'next/link';

// Style
import style from './index.module.scss';

// Icons
import { BsPencilSquare } from 'react-icons/bs';

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
