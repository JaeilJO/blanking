import GroupTable from '@/components/PageTable';
import { basic_mock } from '@/mock/basic';
import style from './page.module.scss';

async function Page({ params }: { params: { group: string } }) {
    const current_group_name = decodeURIComponent(params.group as string);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/userpages`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            cookie: `groupname=${current_group_name}`,
        },
        cache: 'no-cache',
        credentials: 'include',
    });

    const pages = await res.json();

    return (
        <div className={style.page_table_wrapper}>
            <div className={style.title}>{current_group_name}</div>
            <GroupTable pages={pages} />
        </div>
    );
}

export default Page;
