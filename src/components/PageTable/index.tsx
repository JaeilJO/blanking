'use client';

// Utils
import Link from 'next/link';
import { redirect, useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import useGetPages from '@/hooks/useGetpages';

// Style
import style from './index.module.scss';

// Components
import PageDeleteButton from './PageDeleteButton';
import PageChangeNameButton from './PageChangeNameButton';
import GetPagesLoading from './GetPagesLoading';

function PageTable({ current_group_name, username }: { current_group_name: string; username: string }) {
    const param = useParams();
    const session = useSession();
    const params = useParams();

    const subkey = session.data?.user.subkey as string;
    const parameterUsername = decodeURIComponent(params.username as string);
    const isCurrentUser = parameterUsername === username;

    const { data, isLoading } = useGetPages({ groupname: current_group_name, subkey });

    if (isLoading) {
        return <GetPagesLoading />;
    }

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
