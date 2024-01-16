// Components
import Sidebar from '@/components/Sidebar';

// Next Auth
import { config } from '@/utils/auth';
import { getServerSession } from 'next-auth';

//Utils
import getUser from '@/utils/getUser';
import { redirect } from 'next/navigation';

// Style
import style from './layout.module.scss';
import ReactQueryProvider from '@/components/ReactQueryProvider';

async function Layout({
    children,
    createGroupModal,
    deleteGroupModal,
    createPageModal,
    deletePageModal,
}: {
    children: React.ReactNode;
    createGroupModal: React.ReactNode;
    deleteGroupModal: React.ReactNode;
    createPageModal: React.ReactNode;
    deletePageModal: React.ReactNode;
}) {
    const session = await getServerSession(config);
    const userid = session?.user.id as string;

    if (!session) {
        redirect(`/auth/signin`);
    }

    const user = await getUser(userid);

    return (
        <ReactQueryProvider>
            <div>
                {/* Modals */}
                {createGroupModal}
                {deleteGroupModal}
                {createPageModal}
                {deletePageModal}

                <nav className={style.navigation_wrapper}>
                    <Sidebar username={user.name} groups={user.groups} />
                </nav>
                <main className={style.content_wrapper}>{children}</main>
            </div>
        </ReactQueryProvider>
    );
}

export default Layout;
