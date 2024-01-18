'use client';

//Types
import { Page } from '@/utils/userDataType';

// Utils
import { useQuery } from '@tanstack/react-query';
import { getPage } from '@/lib/getPage';
import { useEffect, useState } from 'react';

// Styles
import style from './index.module.scss';

//Components
import EditorJs from '../EditorJs';
import DeletePageButton from './DeletePageButton';
import ChangePageButton from './ChangePageButton';
import ChangeModeTitle from './ChangeModeTitle';

function UserPage({ pagename, groupname }: { pagename: string; groupname: string }) {
    const { data } = useQuery({ queryKey: ['page'], queryFn: () => getPage({ pagename, groupname }) });

    const [page, setPage] = useState<Page>();
    const [changeMode, setChangeMode] = useState(false);

    useEffect(() => {
        if (data) {
            setPage(data[0]);
        }
    }, [page]);

    return (
        <>
            {changeMode ? (
                <ChangeModeTitle pagename={pagename} groupname={groupname} setChangeMode={setChangeMode} />
            ) : (
                <>
                    <div className={style.page_title}>{pagename}</div>
                    <div className={style.page_config_buttons}>
                        <ChangePageButton setChangeMode={setChangeMode} />
                        <DeletePageButton pagename={pagename} groupname={groupname} />
                    </div>

                    <EditorJs data={page?.content} />
                </>
            )}
        </>
    );
}

export default UserPage;
