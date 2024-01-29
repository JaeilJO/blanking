// Components

// Next Auth
import { NextAuthOption } from '@/lib/nextAuth/auth';
import { getServerSession } from 'next-auth';

//Utils
import { redirect } from 'next/navigation';
import dynamic from 'next/dynamic';

// Style
import style from './layout.module.scss';

const ReactQueryProvider = dynamic(() => import('@/components/ReactQueryProvider'), { ssr: false });
const SideBarLayout = dynamic(() => import('@/components/Sidebar/SidebarLayout/sidebarLayout'), { ssr: false });

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
    const subkey = session?.user.subkey || '';
    const queryClient = new QueryClient();

    if (!session) {
        redirect(`/auth/signin`);
    }

    await queryClient.prefetchQuery({
        queryKey: ['groups'],
        queryFn: () => getGroups(subkey),
    });

    const dehydratedState = dehydrate(queryClient);
    console.log(session);
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
