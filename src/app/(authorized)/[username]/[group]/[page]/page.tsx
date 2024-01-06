import EditorJs from '@/components/EditorJs';
import { basic_mock } from '@/mock/basic';
import style from './page.module.scss';

function Page({ params }: { params: { page: string } }) {
    const user = basic_mock;

    const page_name = decodeURIComponent(params.page as string);

    const group = user.groups.filter((group) => group.groupname === params.group);

    const page = group[0]?.pages?.filter((page) => page.pagename === page_name)[0];

    return (
        <div className={style.page_wrapper}>
            <div className={style.page_title}>{page_name}</div>

            <EditorJs data={page?.content} />
        </div>
    );
}

export default Page;
