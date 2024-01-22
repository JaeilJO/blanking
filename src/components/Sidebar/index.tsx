'use client';

// Utiles
import Link from 'next/link';

//Style
import style from './index.module.scss';

// Components
import LogoutButton from './LogoutButton';
import GroupCategory from './GroupCategory';

//Next Auth

import { useSession } from 'next-auth/react';

function Sidebar({ userid }) {
    const session = useSession();

    const username = session?.data?.user?.name as string;

    return (
        <div className={style.sidebar}>
            <Link href={`/user/${username}`} className={style.title}>
                {username}
            </Link>

            <hr className={style.line} />

            <div className={style.category_wrapper}>
                <GroupCategory userid={userid} />
            </div>

            <LogoutButton />
        </div>
    );
}

export default Sidebar;
