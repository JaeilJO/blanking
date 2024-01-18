import Link from 'next/link';
import { BsTrash3 } from 'react-icons/bs';
import style from './index.module.scss';

function DeletePageButton({ pagename, groupname }: { pagename: string; groupname: string }) {
    return (
        <Link
            href={{
                pathname: '/user/deletepage',
                query: { groupname: groupname, pagename: pagename },
            }}
            className={style.button}
            title="페이지 삭제하기"
        >
            <BsTrash3 />
        </Link>
    );
}

export default DeletePageButton;
