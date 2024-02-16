// Utils
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getPages } from '@/services/getPages';
import { getServerSession } from 'next-auth';
import { NextAuthOption } from '@/lib/nextAuth/auth';

// Style
import style from './page.module.scss';

// Components
import GroupTable from '@/components/PageTable';

async function Page({ params }: { params: { group: string } }) {
    const current_group_name = decodeURIComponent(params.group as string);
    const session = await getServerSession(NextAuthOption);
    const username = session?.user.name as string;
    const subkey = session?.user.subkey as string;
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['pages', { groupname: current_group_name }],
        queryFn: () => getPages({ groupname: current_group_name, subkey }),
    });

    const dehydratedState = dehydrate(queryClient);

    return (
        <HydrationBoundary state={dehydratedState}>
            <div className={style.page_table_wrapper}>
                <div className={style.title}>{current_group_name}</div>
                <GroupTable current_group_name={current_group_name} username={username} />
            </div>
        </HydrationBoundary>
    );
}

export default Page;
