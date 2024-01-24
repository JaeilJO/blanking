'use client';

import Link from 'next/link';
import style from './index.module.scss';

import { redirect, useParams } from 'next/navigation';
import PageDeleteButton from './PageDeleteButton';
import PageChangeNameButton from './PageChangeNameButton';
import { useQuery } from '@tanstack/react-query';
import { getPages } from '@/services/getPages';
import { useSession } from 'next-auth/react';

function PageTable({ current_group_name, username }: { current_group_name: string; username: string }) {
    const param = useParams();
    const session = useSession();
    const subkey = session.data?.user.subkey as string;
    const params = useParams();

    const parameterUsername = decodeURIComponent(params.username as string);

    const isCurrentUser = parameterUsername === username;

    const { data } = useQuery({
        queryKey: ['pages', { groupname: current_group_name }],
        queryFn: () => getPages({ groupname: current_group_name, subkey }),
    });

    if (!isCurrentUser) {
        redirect('/not-found');
    }

    if (data.length === 0) {
        return <div>페이지가 없습니다.</div>;
    }

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
                            <PageChangeNameButton pagename={page.pagename} groupname={current_group_name} />
                            <PageDeleteButton pagename={page.pagename} groupname={current_group_name} />
                        </ul>
                    </div>
                </li>
            ))}
            <li></li>
        </ul>
    );
}

export default PageTable;
