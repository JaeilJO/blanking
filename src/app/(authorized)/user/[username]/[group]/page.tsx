import GroupTable from '@/components/PageTable';

import style from './page.module.scss';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getPages } from '@/lib/getPages';

async function Page({ params }: { params: { group: string } }) {
    const current_group_name = decodeURIComponent(params.group as string);

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['pages', { groupname: current_group_name }],
        queryFn: () => getPages({ groupname: current_group_name }),
    });

    const dehydratedState = dehydrate(queryClient);

    return (
        <HydrationBoundary state={dehydratedState}>
            <div className={style.page_table_wrapper}>
                <div className={style.title}>{current_group_name}</div>
                <GroupTable current_group_name={current_group_name} />
            </div>
        </HydrationBoundary>
    );
}

export default Page;
