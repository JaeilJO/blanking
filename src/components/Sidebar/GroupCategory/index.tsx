'use client';

//Utils
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import getGroups from '@/lib/getGroups';

//Style
import style from './index.module.scss';

//Components
import PageCategory from '../PageCategory';
import DeleteGroupButton from './DeleteGroupButton';
import GroupCategoryTitle from './GroupCategoryTitle';

//Icons
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { BsFillPencilFill } from 'react-icons/bs';

interface GroupCategoryProps {
    userid: string;
}

function GroupCategory({ userid }: GroupCategoryProps) {
    const params = useParams();
    const session = useSession();

    const username = session?.data?.user?.name as string;

    const current_group_name = decodeURIComponent(params.group as string);

    const { data, isLoading } = useQuery({
        queryKey: ['navigation'],
        queryFn: () => getGroups(userid),
    });

    return (
        <ul className={style.group_category_wrapper}>
            {isLoading && <div>loading...</div>}
            {data?.map((group: any) => (
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
