'use client';

// Utils
import Link from 'next/link';

// Style
import style from './index.module.scss';

// Icons
import { BsFilePlus } from 'react-icons/bs';

// Components
import PageCategoryItemWrapper from '../PageCategoryItemWrapper';

function CreatePageButton({ current_group_name }: { current_group_name: string }) {
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

export default CreatePageButton;
