'use client';

import { useSearchParams } from 'next/navigation';
import ModalBackground from '../ModalBackground';
import style from './index.module.scss';
import classNames from 'classnames/bind';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { useAlertStore } from '@/zustand/alertStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPage } from '@/services/createPage';
import { useSession } from 'next-auth/react';
import { AxiosError } from 'axios';
import useCreatePage from '@/hooks/useCreatePage';

const cn = classNames.bind(style);

function CreatePageModal() {
    const searchParams = useSearchParams();
    const session = useSession();
    const router = useRouter();

    //Page Name
    const [pagename, setPagename] = useState('');

    //Subkey
    const subkey = session.data?.user.subkey as string;

    //Group Name
    const groupname = decodeURIComponent(searchParams.get('groupname') as string);

    const { mutate } = useCreatePage({ subkey, groupname, pagename, router });

    const cancelButtonClickHandler = () => {
        router.back();
    };
    const pageNameHandler = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setPagename(e.target.value);
        },
        [pagename]
    );
    const submitButtonClickHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate();
    };

    return (
        <ModalBackground>
            <div className={style.modal_wrapper}>
                <div className={style.title}>페이지 추가</div>
                <div className={style.group_name}>추가할 그룹 : {groupname}</div>

                <form className={style.form} onSubmit={submitButtonClickHandler}>
                    <input
                        className={style.input_field}
                        onChange={pageNameHandler}
                        type="text"
                        placeholder="페이지 이름을 입력해주세요"
                    />
                    <div className={style.warning}>
                        특수문자 제외 <b>영어 대 소문자 혹은 한글</b>만 사용 가능합니다
                    </div>
                    <input
                        className={cn({
                            button_common_style: true,
                            submit_button: true,
                        })}
                        type="submit"
                        value={'페이지 생성'}
                        required
                    />
                </form>
                <button
                    className={cn({
                        button_common_style: true,
                        cancel_button: true,
                    })}
                    onClick={cancelButtonClickHandler}
                >
                    닫기
                </button>
            </div>
        </ModalBackground>
    );
}

export default CreatePageModal;
