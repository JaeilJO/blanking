// Utiles
import Link from 'next/link';

//Style
import style from './index.module.scss';

// Components
import LogoutButton from './LogoutButton';
import GroupCategory from './GroupCategory';

function Sidebar({ username, groups }: { username: string; groups: any }) {
    return (
        <div className={style.sidebar}>
            <Link href={`/user/${username}`} className={style.title}>
                {username}
            </Link>

            <hr className={style.line} />

            <div className={style.category_wrapper}>
                {groups?.length === 0 ? (
                    <div>Group이 없습니다.</div>
                ) : (
                    <GroupCategory groups={groups} username={username} />
                )}
            </div>

            <LogoutButton />
        </div>
    );
}

export default Sidebar;
