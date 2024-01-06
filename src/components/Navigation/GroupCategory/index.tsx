'use client';

import Link from 'next/link';
import style from './index.module.scss';
import { useParams } from 'next/navigation';
import classNames from 'classnames/bind';
import PageCategory from '../PageCategory';
import { BsFillCaretLeftFill } from 'react-icons/bs';

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
                <li key={group.groupname}>
                    <div className={style.group_title_wrapper}>
                        <Link
                            href={`/${username}/${group.groupname}`}
                            className={cn({
                                group_title: true,
                                current: params.group === group.groupname,
                            })}
                        >
                            {group.groupname}
                        </Link>
                        <span
                            className={cn({
                                group_title_icon: true,
                                current: params.group === group.groupname,
                            })}
                        >
                            <BsFillCaretLeftFill />
                        </span>
                    </div>

                    {/* Page Category */}
                    {group.pages === undefined ? (
                        <div>페이지가 없습니다</div>
                    ) : (
                        <PageCategory username={username} groupname={group.groupname} pages={group.pages} />
                    )}
                </li>
            ))}
        </ul>
    );
}

export default GroupCategory;
