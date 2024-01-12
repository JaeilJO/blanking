// Components
import Navigation from '@/components/Navigation';

// Next Auth
import { config } from '@/utils/auth';
import { getServerSession } from 'next-auth';

//Utils
import getUser from '@/utils/getUser';
import { redirect } from 'next/navigation';

// Style
import style from './layout.module.scss';

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
    const userid = session?.user.id as string;

    const user = await getUser(userid);

    if (!session) {
        redirect(`/auth/signin`);
    }

    return (
        <div>
            {/* Modals */}
            {createGroupModal}
            {deleteGroupModal}
            {createPageModal}

            <nav className={style.navigation_wrapper}>
                <Navigation username={user.name} groups={user.groups} />
            </nav>
            <main className={style.content_wrapper}>{children}</main>
        </div>
    );
}

export default Layout;
