'use client';

import Link from 'next/link';
import style from './index.module.scss';
import { useParams } from 'next/navigation';

import PageCategory from '../PageCategory';

import { BsFillPlusSquareFill } from 'react-icons/bs';

import { BsFillPencilFill } from 'react-icons/bs';

import DeleteGroupButton from './DeleteGroupButton';
import GroupCategoryTitle from './GroupCategoryTitle';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import getGroups from '@/lib/getGroups';

interface GroupCategoryProps {
    groups: any;
    username: string;
}

function GroupCategory({ username }: GroupCategoryProps) {
    const params = useParams();
    const session = useSession();
    const userid = session.data?.user.id as string;
    console.log(userid);

    const current_group_name = decodeURIComponent(params.group as string);

    const query = useQuery({ queryKey: ['groups'], queryFn: () => getGroups({ userid: userid }) });

    return (
        <ul className={style.group_category_wrapper}>
            {[].map((group: any) => (
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
