import style from './index.module.scss';

function GroupCategory({ groups }: { groups: any }) {
    return (
        <ul className={style.group_category_wrapper}>
            {groups.map((group: any) => (
                <li>
                    <h2 className={style.group_title}>{group.groupName}</h2>
                </li>
            ))}
        </ul>
    );
}

export default GroupCategory;
