import style from './index.module.scss';

function ModalBackground({ children }: { children: React.ReactNode }) {
    return <div className={style.background}>{children}</div>;
}

export default ModalBackground;
