// Utils
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getPage } from '@/services/getPage';
import { getServerSession } from 'next-auth';
import { NextAuthOption } from '@/lib/nextAuth/auth';
import { redirect } from 'next/navigation';

// Style
import style from './page.module.scss';

// Components
import UserPage from '@/components/UserPage';

interface PageProps {
    params: {
        username: string;
        page: string;
        group: string;
    };
}

async function Page({ params }: PageProps) {
    const pagename = decodeURIComponent(params.page as string);
    const groupname = decodeURIComponent(params.group as string);

    const paramUsername = decodeURIComponent(params.username);
    const session = await getServerSession(NextAuthOption);
    const subkey = session?.user.subkey as string;

    if (paramUsername !== session?.user.name) {
        redirect('/not-found');
    }

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['page', pagename],
        queryFn: () => getPage({ subkey, pagename, groupname }),
    });

    const dehydratedState = dehydrate(queryClient);

    return (
        <HydrationBoundary state={dehydratedState}>
            <div className={style.page_wrapper}>
                <UserPage subkey={subkey} pagename={pagename} groupname={groupname} />
            </div>
        </HydrationBoundary>
    );
}

export default Page;
