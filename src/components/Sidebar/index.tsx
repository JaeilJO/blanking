import Link from 'next/link';
import GroupCategory from './GroupCategory';
import style from './index.module.scss';
import LogoutButton from './LogoutButton';

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
