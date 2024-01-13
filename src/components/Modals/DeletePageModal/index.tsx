'use client';

import ModalBackground from '../ModalBackground';
import style from './index.module.scss';

import { useRouter, useSearchParams } from 'next/navigation';

import { useAlertStore } from '@/zustand/alertStore';

function DeletePageModal() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pagename = decodeURIComponent(searchParams.get('pagename') as string);

    const { error, success } = useAlertStore((state) => state);

    const onClickHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const res = await fetch('/api/userpages', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                pagename,
            }),
        });

        if (res.ok) {
            success('페이지 삭제에 성공하였습니다.');
            router.back();
        } else {
            error('페이지 삭제에 실패하였습니다.');
        }
    };

    const cancelButtonHandler = () => {
        router.back();
    };

    return (
        <ModalBackground>
            <div className={style.modal_wrapper}>
                <div className={style.title}>선택한 Page를 삭제하시겠습니까?</div>

                <div className={style.page_name_wrapper}>
                    <div className={style.page_name_title}>Page Name</div>
                    <div className={style.page_name}>{pagename}</div>
                </div>

                <button onClick={onClickHandler} className={style.submit_button} type="submit">
                    삭제하기
                </button>

                <button className={style.delete_button} onClick={cancelButtonHandler}>
                    취소
                </button>
            </div>
        </ModalBackground>
    );
}

export default DeletePageModal;
