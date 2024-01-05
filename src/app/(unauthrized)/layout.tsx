import style from './layout.module.scss';

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={style.background_wrapper}>
            <div className={style.slide_intro_wrapper}>slide</div>
            <div className={style.auth_wrapper}>{children}</div>
        </div>
    );
}

export default Layout;
