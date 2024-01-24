'use client';

//Utils
import { useCallback, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAlertStore } from '@/zustand/alertStore';
import { changeGroupName } from '@/services/changeGroupName';

//Style
import style from './index.module.scss';

//Components
import ModalBackground from '../ModalBackground';
import { useSession } from 'next-auth/react';

function ChangeGroupNameModal() {
    const searchParams = useSearchParams();
    const session = useSession();
    const router = useRouter();
    const { error, success } = useAlertStore((state) => state);
    const queryClient = useQueryClient();

    //Subkey
    const subkey = session.data?.user.subkey as string;

    //Group Name
    const groupname = decodeURIComponent(searchParams.get('groupname') as string);

    //New Group Name
    const [newGroupName, setNewGroupName] = useState('');

    const newGroupNameInputHandler = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setNewGroupName(e.target.value);
        },
        [newGroupName]
    );

    const { mutate } = useMutation({
        mutationFn: () => changeGroupName({ groupname, new_groupname: newGroupName, subkey }),

        onSuccess: (res) => {
            const message = res.data;
            success(message);
            queryClient.invalidateQueries({ queryKey: ['navigation'] });
            router.back();
        },

        onError: () => {
            error('Group 이름 변경에 실패했습니다');
        },
    });

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
                <div className={style.title}>Group 이름 변경하기</div>

                <form onSubmit={submitHandler} className={style.form}>
                    <input
                        onChange={newGroupNameInputHandler}
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

export default ChangeGroupNameModal;
