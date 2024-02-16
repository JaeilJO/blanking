//Style
import style from './index.module.scss';

// Icons
import { BsMouse } from 'react-icons/bs';

function ScrollGuideBox() {
    return (
        <div className={style.scroll_guide_box}>
            <div className={style.icon}>
                <BsMouse />
            </div>

            <div>스크롤해서 밑에 내용을 더 볼 수 있습니다.</div>
        </div>
    );
}

export default ScrollGuideBox;
