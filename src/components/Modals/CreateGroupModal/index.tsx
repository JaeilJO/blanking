import ModalBackground from '../ModalBackground';
import style from './index.module.scss';

function CreateGroupModal() {
    return (
        <ModalBackground>
            <div className={style.modal_wrapper}>
                <div className={style.title}>Group 생성하기</div>
                <form className={style.form}>
                    <input className={style.input} placeholder="원하는 Group이름을 입력해주세요" />
                    <div className={style.guide_text}>
                        특수문자를 제외한 <b>영어 대 소문자 혹은 한글</b>만을 사용해주세요
                    </div>
                    <input className={style.submit_button} type="submit" value={'Group 생성하기'} />
                </form>
            </div>
        </ModalBackground>
    );
}

export default CreateGroupModal;
