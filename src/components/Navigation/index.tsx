import GroupCategory from './GroupCategory';
import style from './index.module.scss';

function Navigation({ username, groups }: { username: string; groups: any }) {
    return (
        <div className={style.navigation}>
            <h1 className={style.title}>{username}</h1>
            <hr className={style.line} />
            {groups.length === 0 ? <div>Group이 없습니다.</div> : <GroupCategory groups={groups} />}
        </div>
    );
}

export default Navigation;
