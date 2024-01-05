import Navigation from '@/components/Navigation';
import style from './layout.module.scss';
import { basic_mock } from '@/mock/basic';

function Layout({ children }: { children: React.ReactNode }) {
    const user = basic_mock;

    return (
        <div className={style.main_wrapper}>
            <nav className={style.navigation_wrapper}>
                <Navigation username={user.name} groups={user.groups} />
            </nav>
            <main>{children}</main>
        </div>
    );
}

export default Layout;
