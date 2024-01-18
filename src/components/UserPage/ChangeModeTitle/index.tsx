'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import style from './index.module.scss';
import { useCallback, useEffect, useRef, useState } from 'react';
import { changePageName } from '@/lib/changePageName';
import { useAlertStore } from '@/zustand/alertStore';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

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

    const username = session?.data?.user.name as string;
    const inputRef = useRef<HTMLInputElement>(null);
    const [newPagename, setNewPagename] = useState('');
    const router = useRouter();
    const { error, success } = useAlertStore((state) => state);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const onChangeHandler = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setNewPagename(e.target.value);
        },
        [newPagename]
    );
    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: () => changePageName({ pagename, groupname, new_pagename: newPagename }),
        onSuccess: () => {
            success('페이지 이름 변경에 성공하였습니다.');
            queryClient.invalidateQueries({ queryKey: ['navigation'] });
            queryClient.invalidateQueries({ queryKey: ['page'] });
            setChangeMode(false);
            router.replace(`/user/${username}/${groupname}/${newPagename}`);
        },
        onError: () => {
            error('페이지 이름 변경에 실패하였습니다.');
        },
    });

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
