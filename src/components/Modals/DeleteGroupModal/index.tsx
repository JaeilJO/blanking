import ModalBackground from '../ModalBackground';
import style from './index.module.scss';

function DeleteGroupModal() {
    return (
        <ModalBackground>
            <div className={style.modal_wrapper}>
                <div>선택한 Group을 삭제하시겠습니까?</div>
                <div>주의 사항</div>
                <div>Group을 삭제하면 Group아래의 모든 페이지가 삭제 됩니다</div>
                <form>
                    <label htmlFor="checkReadWarning">주의사항을 모두 숙제하였습니다</label>
                    <input id="checkReadWarning" type="checkbox" />
                    <input type="submit" value={'삭제하기'} />
                </form>
                <button>취소</button>
            </div>
        </ModalBackground>
    );
}

export default DeleteGroupModal;
