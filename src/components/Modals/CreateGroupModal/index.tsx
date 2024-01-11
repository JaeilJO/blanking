'use client';

import { useRef, useState } from 'react';
import ModalBackground from '../ModalBackground';
import style from './index.module.scss';
import { useSession } from 'next-auth/react';

import { useAlertStore } from '@/zustand/alertStore';
import { redirect, useRouter } from 'next/navigation';
import Link from 'next/link';

function CreateGroupModal() {
    const groupNameRef = useRef<HTMLInputElement>(null);
    const { error, success } = useAlertStore((state) => state);
    const router = useRouter();

    const session = useSession();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const groupname = groupNameRef.current?.value;
        const id = session?.data?.user.id;

        const res = await fetch(`/api/group`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id,
                groupname,
            }),
        });

        if (res.ok) {
            success('그룹 생성이 완료되었습니다.');
            router.back();
        } else {
            error('그룹 이름은 중복될 수 없습니다. 다른 이름을 사용해주세요.');
        }
    };

    const closeHandler = () => {
        router.back();
    };

    return (
        <ModalBackground>
            <div className={style.modal_wrapper}>
                <div className={style.title}>Group 생성하기</div>

                <form className={style.form} onSubmit={handleSubmit}>
                    <input
                        ref={groupNameRef}
                        required
                        className={style.input}
                        placeholder="원하는 Group이름을 입력해주세요"
                    />
                    <div className={style.guide_text}>
                        특수문자를 제외한 <b>영어 대 소문자 혹은 한글</b>만을 사용해주세요
                    </div>
                    <input className={style.submit_button} type="submit" value={'Group 생성하기'} />
                </form>
                <button onClick={closeHandler} className={style.close_button}>
                    닫기
                </button>
            </div>
        </ModalBackground>
    );
}

export default CreateGroupModal;
