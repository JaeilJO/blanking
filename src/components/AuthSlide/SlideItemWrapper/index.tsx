import style from './index.module.scss';

function SlideItemWrapper({ children }: { children: React.ReactNode }) {
    return <li className={style.slide_item_wrapper}>{children}</li>;
}

export default SlideItemWrapper;
