import GroupTable from '@/components/PageTable';

import style from './page.module.scss';

async function Page({ params }: { params: { group: string } }) {
    const current_group_name = decodeURIComponent(params.group as string);

    return (
        <div className={style.page_table_wrapper}>
            <div className={style.title}>{current_group_name}</div>
            <GroupTable current_group_name={current_group_name} />
        </div>
    );
}

export default Page;
