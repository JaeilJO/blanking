import style from './page.module.scss';
import UserPage from '@/components/UserPage';

interface PageProps {
    params: {
        page: string;
        group: string;
    };
}

async function Page({ params }: PageProps) {
    const pagename = decodeURIComponent(params.page as string);
    const groupname = decodeURIComponent(params.group as string);

    return (
        <div className={style.page_wrapper}>
            <UserPage pagename={pagename} groupname={groupname} />
        </div>
    );
}

export default Page;
