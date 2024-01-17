// Components
import Sidebar from '@/components/Sidebar';

// Next Auth
import { config } from '@/utils/auth';
import { getServerSession } from 'next-auth';

//Utils
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
    changeGroupNameModal,
    changePageNameModal,
}: {
    children: React.ReactNode;
    createGroupModal: React.ReactNode;
    deleteGroupModal: React.ReactNode;
    createPageModal: React.ReactNode;
    deletePageModal: React.ReactNode;
    changeGroupNameModal: React.ReactNode;
    changePageNameModal: React.ReactNode;
}) {
    const session = await getServerSession(config);

    if (!session) {
        redirect(`/auth/signin`);
    }

    return (
        <ReactQueryProvider>
            <div>
                {/* Modals */}
                {changePageNameModal}
                {changeGroupNameModal}
                {createGroupModal}
                {deleteGroupModal}
                {createPageModal}
                {deletePageModal}

                <nav className={style.navigation_wrapper}>
                    <Sidebar />
                </nav>
                <main className={style.content_wrapper}>{children}</main>
            </div>
        </ReactQueryProvider>
    );
}

export default Layout;
