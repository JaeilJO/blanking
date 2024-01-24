'use client';

//Utils
import { redirect, useParams } from 'next/navigation';
import useGetGroups from '@/hooks/useGetGroups';

import { useSession } from 'next-auth/react';

//Style
import style from './index.module.scss';

//Components
import PageCategory from '../PageCategory';
import DeleteGroupButton from './DeleteGroupButton';
import GroupCategoryTitle from './GroupCategoryTitle';
import ChangeGroupNameButton from './ChangeGroupNameButton';
import CreateGroupButton from './CreateGroupButton';
import GroupCategoryLoading from './GroupCategoryLoading';

interface GroupCategoryProps {
    subkey: string;
}

function GroupCategory({ subkey }: GroupCategoryProps) {
    const params = useParams();
    const session = useSession();

    const username = session?.data?.user?.name as string;

    const current_group_name = decodeURIComponent(params.group as string);

    const { data, isLoading, isError } = useGetGroups({ subkey });

    if (isError) {
        return redirect('/500');
    }

    if (isLoading) {
        return <GroupCategoryLoading />;
    }

    return (
        <ul className={style.group_category_wrapper}>
            {data?.map((group: any) => (
                <li key={group.groupname}>
                    <div className={style.group_title_wrapper}>
                        <GroupCategoryTitle current_group_name={current_group_name} username={username} group={group} />

                        <div className={style.group_title_button_wrapper}>
                            <ChangeGroupNameButton groupname={group.groupname} username={username} />
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

            <CreateGroupButton />
        </ul>
    );
}

export default GroupCategory;
