'use client';

// Utils
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import useChangePageName from '@/hooks/useChangePageName';

// Style
import style from './index.module.scss';

// Components
import ModalBackground from '../ModalBackground';

function ChangePageNameModal() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const session = useSession();

    //New Group Name
    const [newPageName, setNewPageName] = useState('');

    //Subkey
    const subkey = session.data?.user.subkey as string;

    //Group Name
    const groupname = decodeURIComponent(searchParams.get('groupname') as string);

    //Page Name
    const pagename = decodeURIComponent(searchParams.get('pagename') as string);

    const { mutate } = useChangePageName({ subkey, groupname, pagename, new_pagename: newPageName, router });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPageName(e.target.value);
    };

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate();
    };

    const cancelButtonHandler = () => {
        router.back();
    };
    return (
        <ModalBackground>
            <div className={style.modal_wrapper}>
                <div className={style.title}>Page 이름 변경하기</div>

                <form onSubmit={submitHandler} className={style.form}>
                    <input
                        onChange={onChange}
                        required
                        className={style.input}
                        placeholder="변경하실 Page이름을 입력해주세요"
                    />
                    <div className={style.guide_text}>
                        특수문자를 제외한 <b>영어 대 소문자 혹은 한글</b>만을 사용해주세요
                    </div>
                    <input className={style.submit_button} type="submit" value={'이름 변경하기'} />
                </form>
                <button onClick={cancelButtonHandler} className={style.close_button}>
                    닫기
                </button>
            </div>
        </ModalBackground>
    );
}

export default ChangePageNameModal;
