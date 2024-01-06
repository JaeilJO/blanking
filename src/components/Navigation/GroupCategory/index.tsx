'use client';

import Link from 'next/link';
import style from './index.module.scss';
import { useParams } from 'next/navigation';
import classNames from 'classnames/bind';

interface GroupCategoryProps {
    groups: any;
    username: string;
}

const cn = classNames.bind(style);

function GroupCategory({ groups, username }: GroupCategoryProps) {
    const params = useParams();

    return (
        <ul className={style.group_category_wrapper}>
            {groups.map((group: any) => (
                <li key={group.groupName}>
                    <Link
                        href={`/${username}/${group.groupName}`}
                        className={cn({
                            group_title: true,
                            current: params.group === group.groupName,
                        })}
                    >
                        {group.groupName}
                    </Link>

                    {/* Page Category */}
                    {group.pages === undefined ? (
                        <div>페이지가 없습니다</div>
                    ) : (
                        <ul>
                            {group.pages.map((page: any) => (
                                <li key={page.pagename}>
                                    <h3>{page.pagename}</h3>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default GroupCategory;
