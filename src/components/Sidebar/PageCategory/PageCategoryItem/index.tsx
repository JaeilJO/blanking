import Link from 'next/link';
import PageCategoryItemWrapper from '../PageCategoryItemWrapper';
import { BsFileEarmark } from 'react-icons/bs';
import style from './index.module.scss';
import classNames from 'classnames/bind';
import { BsFileEarmarkCheck } from 'react-icons/bs';

interface PageCategoryItemProps {
    current_page_name: string;
    pagename: string;
    current_group_name: string;
    groupname: string;
    username: string;
}

const cn = classNames.bind(style);

function PageCategoryItem({
    current_page_name,
    pagename,
    current_group_name,
    groupname,
    username,
}: PageCategoryItemProps) {
    const isCurrentPage = current_page_name === pagename && current_group_name === groupname;

    return (
        <>
            <PageCategoryItemWrapper
                current_page_name={current_page_name}
                pagename={pagename}
                current_group_name={current_group_name}
                groupname={groupname}
            >
                <Link
                    className={cn({
                        item_link: true,
                        current: isCurrentPage,
                    })}
                    href={`/user/${username}/${groupname}/${pagename}`}
                >
                    <span className={style.icon}>{isCurrentPage ? <BsFileEarmarkCheck /> : <BsFileEarmark />}</span>
                    <span>{pagename}</span>
                </Link>
            </PageCategoryItemWrapper>
        </>
    );
}

export default PageCategoryItem;
