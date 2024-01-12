'use clinet';

import Link from 'next/link';
import style from './index.module.scss';
import classNames from 'classnames/bind';
import { useParams, useRouter } from 'next/navigation';
import PageAddButton from './PageAddButton';
import PageCategoryItemWrapper from './PageCategoryItemWrapper';

interface PageCategoryProps {
    username: string;
    groupname: string;
    pages: any[];
    iscurrent_group: boolean;
}

function PageCategory({ username, groupname, pages, iscurrent_group }: PageCategoryProps) {
    const param = useParams();

    const current_page_name = decodeURIComponent(param.page as string);
    const current_group_name = decodeURIComponent(param.group as string);

    const pageLength = pages ? pages.length : 0;

    return (
        <ul
            className={style.page_category_wrapper}
            style={{ height: `${iscurrent_group ? pageLength * 30 + 30 : 0}px` }}
        >
            {pages?.map((page: any) => (
                <PageCategoryItemWrapper
                    key={page.pagename}
                    current_page_name={current_page_name}
                    pagename={page.pagename}
                    current_group_name={current_group_name}
                    groupname={groupname}
                >
                    <Link href={`/user/${username}/${groupname}/${page.pagename}`}>{page.pagename}</Link>
                </PageCategoryItemWrapper>
            ))}

            <PageAddButton current_group_name={current_group_name} />
        </ul>
    );
}

export default PageCategory;
