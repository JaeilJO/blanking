// Utils
import Link from 'next/link';

// Style
import style from './index.module.scss';

// Icons
import { BsTrash3 } from 'react-icons/bs';

function DeleteGroupButton({ groupname }: { groupname: string }) {
    return (
        <Link
            href={{
                pathname: '/user/deletegroup',
                query: { groupname: groupname },
            }}
            className={style.button}
            title="delete group"
        >
            <BsTrash3 />
        </Link>
    );
}

export default DeleteGroupButton;
