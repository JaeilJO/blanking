'use client';

// Utils
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import useCreateGroup from '@/hooks/useCreateGroup';

// Style
import style from './index.module.scss';

// Components
import ModalBackground from '../ModalBackground';

function CreateGroupModal() {
    const router = useRouter();
    const session = useSession();

    //Group Name
    const [groupname, setGroupname] = useState('');
    const groupNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setGroupname(e.target.value);
    };

    // User Subkey
    const subkey = session?.data?.user.subkey as string;

    // useCreaqteGroup
    const { mutate } = useCreateGroup({ subkey, groupname, router, isModal: true });

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
                        onChange={groupNameHandler}
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
