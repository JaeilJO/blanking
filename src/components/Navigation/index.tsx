import Link from 'next/link';
import GroupCategory from './GroupCategory';
import style from './index.module.scss';
import { BsDoorOpen } from 'react-icons/bs';

function Navigation({ username, groups }: { username: string; groups: any }) {
    return (
        <div className={style.navigation}>
            <Link href={`/${username}`} className={style.title}>
                {username}
            </Link>
            <hr className={style.line} />
            <div className={style.category_wrapper}>
                {groups.length === 0 ? (
                    <div>Group이 없습니다.</div>
                ) : (
                    <GroupCategory groups={groups} username={username} />
                )}
            </div>
            <button className={style.logout_button}>
                <span className={style.logout_icon}>
                    <BsDoorOpen />
                </span>

                <span>Logout</span>
            </button>
        </div>
    );
}

export default Navigation;
