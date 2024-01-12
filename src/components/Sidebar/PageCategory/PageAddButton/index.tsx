'use client';

import { BsFillPlusCircleFill } from 'react-icons/bs';
import style from './index.module.scss';
import Link from 'next/link';

function PageAddButton({ current_group_name }: { current_group_name: string }) {
    return (
        <Link
            href={{
                pathname: '/user/createpage',
                query: { groupname: current_group_name },
            }}
            className={style.button_wrapper}
        >
            <span className={style.icon}>
                <BsFillPlusCircleFill />
            </span>
            <span>페이지 추가</span>
        </Link>
    );
}

export default PageAddButton;
