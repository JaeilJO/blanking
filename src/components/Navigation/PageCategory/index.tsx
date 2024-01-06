'use clinet';

import Link from 'next/link';
import style from './index.module.scss';
import classNames from 'classnames/bind';
import { useParams, useRouter } from 'next/navigation';

interface PageCategoryProps {
    username: string;
    groupname: string;
    pages: any;
}

const cn = classNames.bind(style);

function PageCategory({ username, groupname, pages }: PageCategoryProps) {
    const param = useParams();

    const current_page_name = decodeURIComponent(param.page as string);
    const current_group_name = decodeURIComponent(param.group as string);

    return (
        <ul className={style.page_category_wrapper}>
            {pages?.map((page: any) => (
                <li key={page.pagename}>
                    <Link
                        className={cn({
                            page_title: true,
                            current: current_page_name === page.pagename && current_group_name === groupname,
                        })}
                        href={`/${username}/${groupname}/${page.pagename}`}
                    >
                        {page.pagename}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default PageCategory;
