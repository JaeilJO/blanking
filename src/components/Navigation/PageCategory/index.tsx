'use clinet';

import Link from 'next/link';
import style from './index.module.scss';
import classNames from 'classnames/bind';
import { useParams } from 'next/navigation';

interface PageCategoryProps {
    username: string;
    groupname: string;
    pages: any;
}

const cn = classNames.bind(style);

function PageCategory({ username, groupname, pages }: PageCategoryProps) {
    const param = useParams();

    return (
        <ul className={style.page_category_wrapper}>
            {pages?.map((page: any) => (
                <li key={page.pagename}>
                    <Link
                        className={cn({
                            page_title: true,
                            current: param.page === page.pagename && param.group === groupname,
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
