'use client';

import { useSession } from 'next-auth/react';
import style from './index.module.scss';
import { BsPlusCircle } from 'react-icons/bs';
import { useCallback, useState } from 'react';
import { useAlertStore } from '@/zustand/alertStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createGroup } from '@/lib/createGroup';
import { useRouter } from 'next/navigation';

function GroupMaker() {
    const [groupname, setGroupname] = useState<string>('');
    const { error, success } = useAlertStore((state) => state);
    const session = useSession();
    const subkey = session.data?.user.subkey as string;
    const queryClient = useQueryClient();
    const router = useRouter();

    const groupnameHandler = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setGroupname(e.target.value);
        },
        [groupname]
    );

    const { mutate } = useMutation({
        mutationFn: () => createGroup({ subkey, groupname }),
        onSuccess: async () => {
            success('그룹 생성이 완료되었습니다.');
            queryClient.invalidateQueries({ queryKey: ['navigation'] });
            router.push(`/user/`);
        },
        onError: () => {
            error('해당 그룹이름은 사용할 수 없습니다. 다른 이름을 사용해주세요.');
        },
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate();
    };

    return (
        <form className={style.group_maker_form} onSubmit={handleSubmit}>
            <label className={style.group_maker_submit_button} htmlFor="group_maker_submit">
                <BsPlusCircle />
            </label>

            <input id="group_maker_submit" className={style.group_maker_submit} type="submit" />
            <input
                required
                onChange={groupnameHandler}
                type="text"
                className={style.group_maker_text_input}
                placeholder="Group 이름을 입력해주세요"
            />
        </form>
    );
}

export default GroupMaker;
