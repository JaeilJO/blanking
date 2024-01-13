import classNames from 'classnames/bind';
import style from './index.module.scss';

interface PageCategoryItemWrapperProps {
    children: React.ReactNode;
    current_page_name?: string;
    pagename?: string;
    current_group_name?: string;
    groupname?: string;
}

function PageCategoryItemWrapper({ children }: PageCategoryItemWrapperProps) {
    return <li className={style.page_title}>{children}</li>;
}

export default PageCategoryItemWrapper;
