import { redirect } from 'next/navigation';

import { basic_mock } from '@/mock/basic';
import style from './page.module.scss';
import NoGroup from '@/components/NoGroup';
import GroupTable from '@/components/PageTable';
import { getServerSession } from 'next-auth';
import { config } from '@/utils/auth';

export default async function Page({ params }: { params: { username: string } }) {
    const session = await getServerSession(config);

    //Get Groups
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/group`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            cookie: `id=${session?.user?.id}`,
        },
        credentials: 'include',
    });

    const groups = await res.json();

    if (groups.length >= 1) {
        redirect(`${session?.user.name}/${groups[0]?.groupname}`);
    }

    if (groups.length === 0) {
        return (
            <div className={style.userpage_wrapper}>
                <NoGroup />
            </div>
        );
    }
}
