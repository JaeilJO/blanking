// Utils
import classNames from 'classnames/bind';
import Link from 'next/link';

// Style
import style from './index.module.scss';

// Icons
import { BsFolder, BsFolder2Open } from 'react-icons/bs';

// Types
import { Group } from '@/utils/modelTypes';

interface GroupCategoryTitleProps {
    current_group_name: string;
    username: string;
    group: Group;
}

const cn = classNames.bind(style);

function GroupCategoryTitle({ current_group_name, username, group }: GroupCategoryTitleProps) {
    return (
        <>
            {/* Icon */}
            <span
                className={cn({
                    icon: true,
                    current: current_group_name === group.groupname,
                })}
            >
                {current_group_name === group.groupname ? <BsFolder2Open /> : <BsFolder />}
            </span>

            <Link
                href={`/user/${username}/${group.groupname}`}
                className={cn({
                    title: true,
                    current: current_group_name === group.groupname,
                })}
            >
                {group.groupname}
            </Link>
        </>
    );
}

export default GroupCategoryTitle;
