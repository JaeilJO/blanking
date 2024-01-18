import { getServerSession } from 'next-auth';
import style from './page.module.scss';
import NoGroup from '@/components/NoGroup';
import { config } from '@/utils/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Page() {
    const session = await getServerSession(config);
    const nameInurl = headers().get('next-url')?.split('/')[2];

    const username = session?.user?.name;

    if (nameInurl !== username) {
        redirect('/not-found');
    }

    return (
        <div className={style.userpage_wrapper}>
            <NoGroup />
        </div>
    );
}
