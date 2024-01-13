import classNames from 'classnames/bind';
import style from './index.module.scss';

interface PageCategoryItemWrapperProps {
    children: React.ReactNode;
    current_page_name?: string;
    pagename?: string;
    current_group_name?: string;
    groupname?: string;
    type?: 'pageAddButton';
}

const cn = classNames.bind(style);

function PageCategoryItemWrapper({
    children,
    current_page_name,
    pagename,
    current_group_name,
    groupname,
    type,
}: PageCategoryItemWrapperProps) {
    console.log(current_group_name === groupname && current_page_name === pagename);

    if (type === 'pageAddButton') {
        return <li className={style.page_title}>{children}</li>;
    }

    return (
        <li
            className={cn({
                page_title: true,
                current: current_page_name === pagename && current_group_name === groupname,
            })}
        >
            {children}
        </li>
    );
}

export default PageCategoryItemWrapper;
