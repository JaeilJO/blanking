import { BsTrash3 } from 'react-icons/bs';
import style from './index.module.scss';
import { redirect } from 'next/navigation';
import Link from 'next/link';

function DeleteGroupButton({ groupname }: { groupname: string }) {
    console.log(groupname);
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
