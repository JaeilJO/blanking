// Components

// Next Auth
import { NextAuthOption } from '@/lib/nextAuth/auth';
import { getServerSession } from 'next-auth';

//Utils
import { redirect } from 'next/navigation';

// Style
import style from './layout.module.scss';
import ReactQueryProvider from '@/components/ReactQueryProvider';
import SideBarLayout from '@/components/Sidebar/SidebarLayout/sidebarLayout';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import getGroups from '@/services/getGroups';

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
    const session = await getServerSession(NextAuthOption);
    const subkey = session?.user.subkey as string;
    const queryClient = new QueryClient();

    if (!session) {
        redirect(`/auth/signin`);
    }

    await queryClient.prefetchQuery({
        queryKey: ['groups'],
        queryFn: () => getGroups(subkey),
    });

    const dehydratedState = dehydrate(queryClient);

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

                {/* Sidebar */}
                <HydrationBoundary state={dehydratedState}>
                    <SideBarLayout subkey={subkey} />
                </HydrationBoundary>

                <main className={style.content_wrapper}>{children}</main>
            </div>
        </ReactQueryProvider>
    );
}

export default Layout;
