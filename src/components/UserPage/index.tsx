'use client';

// Utils
import { useQuery } from '@tanstack/react-query';
import { getPage } from '@/lib/getPage';
import { useState } from 'react';
import { redirect } from 'next/navigation';

// Styles
import style from './index.module.scss';

//Components
import EditorJs from '../EditorJs';
import DeletePageButton from './DeletePageButton';
import ChangePageButton from './ChangePageButton';
import ChangeModeTitle from './ChangeModeTitle';
import { useSession } from 'next-auth/react';

function UserPage({ pagename, groupname }: { pagename: string; groupname: string }) {
    const { data } = useQuery({ queryKey: ['page', pagename], queryFn: () => getPage({ pagename, groupname }) });

    const [changeMode, setChangeMode] = useState(false);

    if (!data) {
        console.log('data is null');
        redirect('/not-found');
    }

    if (data?.length === 0) {
        console.log('data is empty');
        redirect('/not-found');
    }

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

                    <EditorJs data={data?.content} />
                </>
            )}
        </>
    );
}

export default UserPage;
