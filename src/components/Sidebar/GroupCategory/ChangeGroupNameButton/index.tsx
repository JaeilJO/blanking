import Link from 'next/link';
import { BsPencil } from 'react-icons/bs';
import style from './index.module.scss';

function ChangeGroupNameButton({ groupname, username }: { groupname: string; username: string }) {
    return (
        <Link
            className={style.button}
            href={{ pathname: '/user/changegroupname', query: { groupname: groupname } }}
            title="change group name"
        >
            <BsPencil />
        </Link>
    );
}

export default ChangeGroupNameButton;
