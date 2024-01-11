import { BsTrash3 } from 'react-icons/bs';
import style from './index.module.scss';
import { redirect } from 'next/navigation';
import Link from 'next/link';

function DeleteGroupButton() {
    const deleteGroupHandler = () => {
        redirect('/user/deletegroup');
    };

    return (
        <Link href={'/user/deletegroup'} className={style.button} title="delete group">
            <BsTrash3 />
        </Link>
    );
}

export default DeleteGroupButton;
