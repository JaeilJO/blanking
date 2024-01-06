import GroupTable from '@/components/PageTable';
import { basic_mock } from '@/mock/basic';
import style from './page.module.scss';

function Page({ params }: { params: { group: string } }) {
    const user = basic_mock;
    const pages = user.groups.find((group: any) => group.groupname === params.group)?.pages;
    return (
        <div className={style.page_table_wrapper}>
            <div className={style.title}>{params.group}</div>
            <GroupTable pages={pages} />
        </div>
    );
}

export default Page;
