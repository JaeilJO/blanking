'use client';

import { useRef } from 'react';
import ModalBackground from '../ModalBackground';
import style from './index.module.scss';

import { useRouter, useSearchParams } from 'next/navigation';

function DeleteGroupModal() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const groupname = decodeURIComponent(searchParams.get('groupname') as string);

    const submitHandler = () => {};

    const cancelButtonHandler = () => {
        router.back();
    };

    return (
        <ModalBackground>
            <div className={style.modal_wrapper} onSubmit={submitHandler}>
                <div className={style.title}>선택한 Group 을 삭제하시겠습니까?</div>

                <div className={style.group_name_wrapper}>
                    <div className={style.group_name_title}>Group Name</div>
                    <div className={style.group_name}>{groupname}</div>
                </div>

                <div className={style.warning}>
                    <div>주의 사항</div>
                    <div>그룹 삭제 시 하위 페이지도 함께 삭제됩니다.</div>
                </div>

                <form className={style.form}>
                    <div className={style.checkbox_wrapper}>
                        <label htmlFor="checkReadWarning">주의사항을 모두 숙제하였습니다</label>
                        <input id="checkReadWarning" type="checkbox" required />
                    </div>
                    <input className={style.submit_button} type="submit" value={'삭제하기'} />
                </form>

                <button className={style.delete_button} onClick={cancelButtonHandler}>
                    취소
                </button>
            </div>
        </ModalBackground>
    );
}

export default DeleteGroupModal;
