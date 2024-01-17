'use client';

import { useCallback, useRef, useState } from 'react';
import ModalBackground from '../ModalBackground';
import style from './index.module.scss';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { changeGroupName } from '@/lib/changeGroupName';
import { useAlertStore } from '@/zustand/alertStore';

function ChangePageNameModal() {
    const session = useSession();
    const searchParams = useSearchParams();
    const router = useRouter();
    const { error, success } = useAlertStore((state) => state);
    const queryClient = useQueryClient();

    //Group Name
    const groupname = decodeURIComponent(searchParams.get('groupname') as string);

    //New Group Name
    const [newGroupName, setNewGroupName] = useState('');

    //User Name
    const userid = session.data?.user.id as string;

    const onChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setNewGroupName(e.target.value);
        },
        [newGroupName]
    );

    // const { mutate } = useMutation({
    //     mutationFn: () => changeGroupName({ userid, groupname, new_groupname: newGroupName }),
    //     onSuccess: (res) => {
    //         const message = res.data;
    //         success(message);
    //         queryClient.invalidateQueries({ queryKey: ['navigation'] });
    //         router.back();
    //     },
    // });

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // mutate();
    };

    const cancelButtonHandler = () => {
        router.back();
    };
    return (
        <ModalBackground>
            <div className={style.modal_wrapper}>
                <div className={style.title}>Group 이름 변경하기</div>

                <form onSubmit={submitHandler} className={style.form}>
                    <input
                        onChange={onChange}
                        required
                        className={style.input}
                        placeholder="변경하실 Group이름을 입력해주세요"
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
