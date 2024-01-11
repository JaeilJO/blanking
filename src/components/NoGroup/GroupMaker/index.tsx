'use client';

import { useSession } from 'next-auth/react';
import style from './index.module.scss';
import { BsPlusCircle } from 'react-icons/bs';
import { useRef } from 'react';
import { useAlertStore } from '@/zustand/alertStore';
import { redirect } from 'next/navigation';

function GroupMaker() {
    const inputRef = useRef<HTMLInputElement>(null);
    const { error, success } = useAlertStore((state) => state);

    const session = useSession();
    const user = session.data?.user;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const groupname = inputRef.current?.value;

        await fetch('/api/group', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...user, groupname }),
        })
            .then(() => {
                success('그룹 생성이 완료되었습니다.');
                redirect(`/user/${user?.name}/${groupname}`);
            })
            .catch(() => {
                error('그룹 이름은 중복될 수 없습니다. 다른 이름을 사용해주세요.');
            });
    };

    return (
        <form className={style.group_maker_form} onSubmit={handleSubmit}>
            <label className={style.group_maker_submit_button} htmlFor="group_maker_submit">
                <BsPlusCircle />
            </label>

            <input id="group_maker_submit" className={style.group_maker_submit} type="submit" />
            <input
                required
                ref={inputRef}
                type="text"
                className={style.group_maker_text_input}
                placeholder="Group 이름을 입력해주세요"
            />
        </form>
    );
}

export default GroupMaker;
