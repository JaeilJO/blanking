'use client';

import Link from 'next/link';
import style from './index.module.scss';

import { redirect, useParams } from 'next/navigation';
import PageDeleteButton from './PageDeleteButton';
import PageChangeNameButton from './PageChangeNameButton';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getPages } from '@/lib/getPages';
import { useSession } from 'next-auth/react';

function PageTable({ current_group_name }: { current_group_name: string }) {
    const param = useParams();
    const session = useSession();
    const subkey = session.data?.user.subkey as string;
    const params = useParams();

    const parameterUsername = decodeURIComponent(params.username as string);

    const isCurrentUser = parameterUsername === session?.data?.user.name;

    const { data } = useQuery({
        queryKey: ['pages', { groupname: current_group_name }],
        queryFn: () => getPages({ groupname: current_group_name, subkey }),
    });

    if (!data || !isCurrentUser) {
        console.log('hello');
        redirect('/not-found');
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
