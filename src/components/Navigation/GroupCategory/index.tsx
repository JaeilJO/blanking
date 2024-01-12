'use client';

import Link from 'next/link';
import style from './index.module.scss';
import { useParams } from 'next/navigation';
import classNames from 'classnames/bind';
import PageCategory from '../PageCategory';

import { BsFolder2Open } from 'react-icons/bs';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { BsFolder } from 'react-icons/bs';
import { BsTrash3 } from 'react-icons/bs';
import { BsFillPencilFill } from 'react-icons/bs';
import { useState } from 'react';
import DeleteGroupButton from './DeleteGroupButton';
import GroupCategoryTitle from './GroupCategoryTitle';

interface GroupCategoryProps {
    groups: any;
    username: string;
}

const cn = classNames.bind(style);

function GroupCategory({ groups, username }: GroupCategoryProps) {
    const params = useParams();

    const current_group_name = decodeURIComponent(params.group as string);
    console.log(groups);
    return (
        <ul className={style.group_category_wrapper}>
            {groups.map((group: any) => (
                <li key={group.groupname}>
                    <div className={style.group_title_wrapper}>
                        <GroupCategoryTitle current_group_name={current_group_name} username={username} group={group} />

                        <div className={style.group_title_button_wrapper}>
                            <button title="change group name">
                                <BsFillPencilFill />
                            </button>

                            <DeleteGroupButton groupname={group.groupname} />
                        </div>
                    </div>

                    <PageCategory
                        username={username}
                        groupname={group.groupname}
                        pages={group.pages}
                        iscurrent_group={current_group_name === group.groupname}
                    />
                </li>
            ))}

            {/* // Group 생성 버튼 */}
            <li>
                <Link className={style.create_group_button} href={`/user/creategroup`}>
                    <span className={style.create_group_button_icon}>
                        <BsFillPlusSquareFill />
                    </span>
                    <span>Group 생성</span>
                </Link>
            </li>
        </ul>
    );
}

export default GroupCategory;
