import Link from 'next/link';
import PageCategoryItemWrapper from '../PageCategoryItemWrapper';

interface PageCategoryItemProps {
    current_page_name: string;
    pagename: string;
    current_group_name: string;
    groupname: string;
    username: string;
}

function PageCategoryItem({
    current_page_name,
    pagename,
    current_group_name,
    groupname,
    username,
}: PageCategoryItemProps) {
    return (
        <>
            <PageCategoryItemWrapper
                current_page_name={current_page_name}
                pagename={pagename}
                current_group_name={current_group_name}
                groupname={groupname}
            >
                <Link href={`/user/${username}/${groupname}/${pagename}`}>{pagename}</Link>
            </PageCategoryItemWrapper>
        </>
    );
}

export default PageCategoryItem;
