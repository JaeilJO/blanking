import { redirect } from 'next/navigation';

import { basic_mock } from '@/mock/basic';
import style from './page.module.scss';
import NoGroup from '@/components/NoGroup';
import GroupTable from '@/components/PageTable';

export default async function Page({ params }: { params: { username: string } }) {
    const user = basic_mock;

    if (user.groups) {
        redirect(`${user.name}/${user.groups[0].groupname}`);
    }

    if (user.groups === undefined) {
        return (
            <div className={style.userpage_wrapper}>
                <NoGroup />
            </div>
        );
    }
}
