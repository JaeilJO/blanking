// Utils
import Link from 'next/link';

// Style
import style from './index.module.scss';

// Icons
import { BsPencil } from 'react-icons/bs';

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
