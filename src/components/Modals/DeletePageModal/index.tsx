'use client';

// Utils
import { useRouter, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import useDeletePage from '@/hooks/useDeletePage';

// Styles
import style from './index.module.scss';

// Components
import ModalBackground from '../ModalBackground';

function DeletePageModal() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const session = useSession();

    const subkey = session.data?.user.subkey as string;
    const pagename = decodeURIComponent(searchParams.get('pagename') as string);
    const groupname = decodeURIComponent(searchParams.get('groupname') as string);

    const { mutate } = useDeletePage({ subkey, pagename, groupname, router });

    const onClickHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        mutate();
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
