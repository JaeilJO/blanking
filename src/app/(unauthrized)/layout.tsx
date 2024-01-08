import AuthSlide from '@/components/AuthSlide';
import style from './layout.module.scss';

async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={style.background_wrapper}>
            <div className={style.slide_intro_wrapper}>
                <AuthSlide />
            </div>
            <div className={style.auth_wrapper}>{children}</div>
        </div>
    );
}

export default Layout;
