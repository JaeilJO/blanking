'use client';

import Link from 'next/link';
import style from './index.module.scss';
import { BsTrash3 } from 'react-icons/bs';
import { BsPencilSquare } from 'react-icons/bs';
import { useParams } from 'next/navigation';

function PageTable({ pages }: { pages: any }) {
    const param = useParams();

    console.log(param);

    return (
        <ul className={style.page_contatiner}>
            {pages?.map((page: any) => (
                <li className={style.page_item} key={page.pagename}>
                    <Link href={`${param.group}/${page.pagename}`} className={style.page_item_image} />
                    <div className={style.page_info}>
                        <Link href={`${param.group}/${page.pagename}`} className={style.page_title}>
                            {page.pagename}
                        </Link>
                        <ul className={style.page_info_icons}>
                            <button className={style.page_info_icon}>
                                <BsPencilSquare />
                            </button>
                            <button className={style.page_info_icon}>
                                <BsTrash3 />
                            </button>
                        </ul>
                    </div>
                </li>
            ))}
            <li></li>
        </ul>
    );
}

export default PageTable;
