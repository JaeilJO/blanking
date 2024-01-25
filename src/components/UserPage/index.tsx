'use client';

// Utils
import { useQuery } from '@tanstack/react-query';
import { getPage } from '@/services/getPage';
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

function UserPage({ subkey, pagename, groupname }: { subkey: string; pagename: string; groupname: string }) {
    const { data } = useQuery({
        queryKey: ['page', pagename],
        queryFn: () => getPage({ subkey, pagename, groupname }),
    });

    const [changeMode, setChangeMode] = useState(false);

    if (!data) {
        redirect('/not-found');
    }

    if (data?.length === 0) {
        redirect('/not-found');
    }

    console.log(data[0].content);

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

                    <EditorJs data={data[0]?.content} pagename={pagename} groupname={groupname} />
                </>
            )}
        </>
    );
}

export default UserPage;
