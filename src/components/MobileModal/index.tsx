import { LiaPrayingHandsSolid } from 'react-icons/lia';
import style from './index.module.scss';
function MobileModal() {
    return (
        <div className={style.modal_background}>
            <div className={style.modal_box}>
                <div className={style.modal_icon}>
                    <LiaPrayingHandsSolid />
                </div>

                <div>죄송합니다</div>

                <div>현재 Mobile 기기는 지원하지 않습니다</div>
            </div>
        </div>
    );
}

export default MobileModal;
