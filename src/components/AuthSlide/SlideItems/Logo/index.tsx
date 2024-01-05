import SlideItemWrapper from '../../SlideItemWrapper';
import style from './index.module.scss';

function Logo() {
    return (
        <SlideItemWrapper>
            <div className={style.logotext}>Blanking</div>
        </SlideItemWrapper>
    );
}

export default Logo;
