'use clinet';

import Link from 'next/link';
import style from './index.module.scss';
import classNames from 'classnames/bind';
import { useParams, useRouter } from 'next/navigation';
import PageAddButton from './PageAddButton';

interface PageCategoryProps {
    username: string;
    groupname: string;
    pages: any[];
    iscurrent_group: boolean;
}

const cn = classNames.bind(style);

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
                <li
                    key={page.pagename}
                    className={cn({
                        page_title: true,
                        current: current_page_name === page.pagename && current_group_name === groupname,
                    })}
                >
                    <Link href={`/user/${username}/${groupname}/${page.pagename}`}>{page.pagename}</Link>
                </li>
            ))}

            <li className={style.page_title}>
                <PageAddButton current_group_name={current_group_name} />
            </li>
        </ul>
    );
}

export default PageCategory;
