import Navigation from '@/components/Navigation';
import style from './layout.module.scss';
import { basic_mock } from '@/mock/basic';

import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { config } from '@/utils/auth';

async function Layout({ children }: { children: React.ReactNode }) {
    const user = basic_mock;
    const session = await getServerSession(config);
    const username = session?.user?.name as string;
    console.log(session);

    if (!session) {
        redirect(`/auth/signin`);
    }

    return (
        <div>
            <nav className={style.navigation_wrapper}>
                <Navigation username={username} groups={user.groups} />
            </nav>
            <main className={style.content_wrapper}>{children}</main>
        </div>
    );
}

export default Layout;
