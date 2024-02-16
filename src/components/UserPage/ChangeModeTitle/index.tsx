'use client';

// Utils
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import useChangePageName from '@/hooks/useChangePageName';

// Style
import style from './index.module.scss';

function ChangeModeTitle({
    pagename,
    groupname,
    setChangeMode,
}: {
    pagename: string;
    groupname: string;
    setChangeMode: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const session = useSession();
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);

    //New Pagename
    const [newPagename, setNewPagename] = useState('');

    //Subkey
    const subkey = session?.data?.user.subkey as string;

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPagename(e.target.value);
    };

    const { mutate } = useChangePageName({ subkey, pagename, groupname, new_pagename: newPagename, router });

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate();
    };

    return (
        <div className={style.change_mode_title_wrapper}>
            <form className={style.form} onSubmit={onSubmitHandler}>
                <input
                    className={style.page_title}
                    type="text"
                    ref={inputRef}
                    placeholder={pagename}
                    onChange={onChangeHandler}
                />
                <input className={style.submit_button} type="submit" value={'변경'} />
            </form>

            <button className={style.cancel_button} onClick={() => setChangeMode(false)}>
                취소
            </button>
        </div>
    );
}

export default ChangeModeTitle;
