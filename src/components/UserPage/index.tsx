'use client';
import { useQuery } from '@tanstack/react-query';
import EditorJs from '../EditorJs';
import style from './index.module.scss';
import { getPage } from '@/lib/getPage';
import { useEffect, useState } from 'react';
import { Page } from '@/utils/userDataType';
import { BsPencil } from 'react-icons/bs';
import DeletePageButton from './DeletePageButton';

function UserPage({ pagename, groupname }: { pagename: string; groupname: string }) {
    const { data } = useQuery({ queryKey: ['page'], queryFn: () => getPage({ pagename, groupname }) });

    const [page, setPage] = useState<Page>();

    useEffect(() => {
        if (data) {
            setPage(data[0]);
        }
    }, [page]);

    return (
        <>
            <div className={style.page_title}>{pagename}</div>

            <div className={style.page_config_buttons}>
                <button>
                    <BsPencil />
                </button>
                <DeletePageButton pagename={pagename} groupname={groupname} />
            </div>

            <EditorJs data={page?.content} />
        </>
    );
}

export default UserPage;
