import Navigation from '@/components/Navigation';
import style from './layout.module.scss';

import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { config } from '@/utils/auth';

async function Layout({
    children,
    createGroupModal,
    deleteGroupModal,
    createPageModal,
}: {
    children: React.ReactNode;
    createGroupModal: React.ReactNode;
    deleteGroupModal: React.ReactNode;
    createPageModal: React.ReactNode;
}) {
    const session = await getServerSession(config);

    const user = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/user`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            cookie: `userid=${session?.user?.id}`,
        },
        credentials: 'include',
    });

    const userinfo = await user.json();

    if (!session) {
        redirect(`/auth/signin`);
    }

    return (
        <div>
            {createGroupModal}
            {deleteGroupModal}
            {createPageModal}
            <nav className={style.navigation_wrapper}>
                <Navigation username={userinfo.name} groups={userinfo.groups} />
            </nav>
            <main className={style.content_wrapper}>{children}</main>
        </div>
    );
}

export default Layout;
