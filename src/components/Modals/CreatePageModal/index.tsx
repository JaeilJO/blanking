'use client';

import { useSearchParams } from 'next/navigation';
import ModalBackground from '../ModalBackground';
import style from './index.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(style);

function CreatePageModal() {
    const searchParams = useSearchParams();
    const groupname = decodeURIComponent(searchParams.get('groupname') as string);

    return (
        <ModalBackground>
            <div className={style.modal_wrapper}>
                <div className={style.title}>페이지 추가</div>
                <div className={style.group_name}>추가할 그룹 : {groupname}</div>

                <form className={style.form}>
                    <input className={style.input_field} type="text" placeholder="페이지 이름을 입력해주세요" />
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
                    />
                </form>
                <button
                    className={cn({
                        button_common_style: true,
                        cancel_button: true,
                    })}
                >
                    닫기
                </button>
            </div>
        </ModalBackground>
    );
}

export default CreatePageModal;
