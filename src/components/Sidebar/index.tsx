// Utiles
import Link from 'next/link';

//Style
import style from './index.module.scss';

// Components
import LogoutButton from './LogoutButton';
import GroupCategory from './GroupCategory';

//Next Auth
import { getServerSession } from 'next-auth';
import { config } from '@/utils/auth';

async function Sidebar() {
    const username = (await getServerSession(config).then((res) => res?.user.name)) as string;
    const userid = (await getServerSession(config).then((res) => res?.user.id)) as string;

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
