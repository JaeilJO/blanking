import style from './page.module.scss';
import NoGroup from '@/components/NoGroup';

import { getServerSession } from 'next-auth';
import { config } from '@/utils/auth';
import { redirect } from 'next/navigation';

export default async function Page({ params }: { params: { username: string } }) {
    const session = await getServerSession(config);
    const username = session?.user.name as string;

    if (params.username !== username) {
        redirect('/not-found');
    }

    return (
        <div className={style.userpage_wrapper}>
            <NoGroup />
        </div>
    );
}
