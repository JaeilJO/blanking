'use client';

import { BsFillPlusCircleFill } from 'react-icons/bs';
import { BsFilePlus } from 'react-icons/bs';
import style from './index.module.scss';
import Link from 'next/link';
import PageCategoryItemWrapper from '../PageCategoryItemWrapper';

function PageAddButton({ current_group_name }: { current_group_name: string }) {
    return (
        <PageCategoryItemWrapper>
            <Link
                href={{
                    pathname: '/user/createpage',
                    query: { groupname: current_group_name },
                }}
                className={style.button_wrapper}
            >
                <span className={style.icon}>
                    <BsFilePlus />
                </span>
                <span className={style.title}>페이지 추가</span>
            </Link>
        </PageCategoryItemWrapper>
    );
}

export default PageAddButton;
