'use client';

//Utils
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
import ChangeGroupNameButton from './ChangeGroupNameButton';
import CreateGroupButton from './CreateGroupButton';
import GroupCategoryLoading from './GroupCategoryLoading';

interface GroupCategoryProps {
    userid: string;
}

function GroupCategory({ userid }: GroupCategoryProps) {
    const params = useParams();
    const session = useSession();

    const username = session?.data?.user?.name as string;

    const current_group_name = decodeURIComponent(params.group as string);

    //Group 정보 가져오기
    const { data, isLoading } = useQuery({
        queryKey: ['navigation'],
        queryFn: () => getGroups(userid),
    });
    console.log(data);

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
