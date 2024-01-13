import EditorJs from '@/components/EditorJs';
import { basic_mock } from '@/mock/basic';
import style from './page.module.scss';

interface PageProps {
    params: {
        page: string;
        group: string;
    };
}

async function Page({ params }: PageProps) {
    const page_name = decodeURIComponent(params.page as string);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/userpage`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            cookie: `groupname=${params.group}; pagename=${page_name}`,
        },
        credentials: 'include',
    });
    const page = await res.json();

    return (
        <div className={style.page_wrapper}>
            <div className={style.page_title}>{page_name}</div>

            <EditorJs data={page?.content} />
        </div>
    );
}

export default Page;
