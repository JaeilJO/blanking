import { SlideItems } from './SlideItems';
import style from './index.module.scss';
function AuthSlide() {
    return (
        <ul className={style.slide_wrapper}>
            <SlideItems.Logo />
            <SlideItems.Example />
            <SlideItems.Contect />
        </ul>
    );
}

export default AuthSlide;
