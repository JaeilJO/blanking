import AuthSlide from '@/components/AuthSlide';
import style from './layout.module.scss';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

async function Layout({ children }: { children: React.ReactNode }) {
    const session = await getServerSession();

    if (session) {
        redirect(`/user/${session.user?.name}`);
    }

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
