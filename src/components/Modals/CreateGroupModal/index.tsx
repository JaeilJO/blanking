'use client';

import { use, useRef, useState } from 'react';
import ModalBackground from '../ModalBackground';
import style from './index.module.scss';
import { useSession } from 'next-auth/react';

import { useAlertStore } from '@/zustand/alertStore';
import { redirect, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createGroup } from '@/lib/createGroup';

function CreateGroupModal() {
    const groupNameRef = useRef<HTMLInputElement>(null);
    const { error, success } = useAlertStore((state) => state);
    const router = useRouter();

    const queryClient = useQueryClient();
    const session = useSession();
    const userid = session?.data?.user.id as string;
    const groupname = groupNameRef.current?.value as string;

    const { mutate } = useMutation({
        mutationFn: () => createGroup({ userid, groupname }),
        onSuccess: () => {
            success('그룹 생성이 완료되었습니다.');
            queryClient.invalidateQueries({ queryKey: ['navigation'] });
            router.back();
        },
        onError: () => {
            error('그룹 이름은 중복될 수 없습니다. 다른 이름을 사용해주세요.');
        },
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate();
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
