//Utils
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { NextAuthOption } from '@/lib/nextAuth/auth';

//Style
import style from './layout.module.scss';

//Components
import AuthSlide from '@/components/AuthSlide';

async function Layout({ children }: { children: React.ReactNode }) {
    const session = await getServerSession(NextAuthOption);

    if (session) {
        //이름이 한글일 수 도 있으니까 인코딩 해준다.
        const encodedText = encodeURIComponent(session?.user?.name as string);
        redirect(`/user/${encodedText}`);
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
