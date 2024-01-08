import Navigation from '@/components/Navigation';
import style from './layout.module.scss';
import { basic_mock } from '@/mock/basic';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

async function Layout({ children }: { children: React.ReactNode }) {
    const user = basic_mock;
    const session = await getServerSession(authOptions);
    console.log(session, 'Hello');

    return (
        <div>
            <nav className={style.navigation_wrapper}>
                <Navigation username={user.name} groups={user.groups} />
            </nav>
            <main className={style.content_wrapper}>{children}</main>
        </div>
    );
}

export default Layout;
