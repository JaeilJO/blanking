'use client';

import Link from 'next/link';
import style from './index.module.scss';

import { useParams } from 'next/navigation';
import PageDeleteButton from './PageDeleteButton';
import PageChangeNameButton from './PageChangeNameButton';
import { useQuery } from '@tanstack/react-query';
import { getPages } from '@/lib/getPages';

function PageTable({ current_group_name }: { current_group_name: string }) {
    const param = useParams();

    const { data } = useQuery({ queryKey: ['pages'], queryFn: () => getPages({ groupname: current_group_name }) });

    return (
        <ul className={style.page_contatiner}>
            {data?.map((page: any) => (
                <li className={style.page_item} key={page.pagename}>
                    <Link href={`${param.group}/${page.pagename}`} className={style.page_item_image} />

                    <div className={style.page_info}>
                        <Link href={`${param.group}/${page.pagename}`} className={style.page_title}>
                            {page.pagename}
                        </Link>

                        <ul className={style.page_info_icons}>
                            <PageChangeNameButton />
                            <PageDeleteButton pagename={page.pagename} />
                        </ul>
                    </div>
                </li>
            ))}
            <li></li>
        </ul>
    );
}

export default PageTable;
