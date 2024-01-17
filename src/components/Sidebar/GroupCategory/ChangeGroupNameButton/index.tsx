import Link from 'next/link';
import { BsFillPencilFill } from 'react-icons/bs';

function ChangeGroupNameButton({ groupname, username }: { groupname: string; username: string }) {
    return (
        <Link href={{ pathname: '/user/changegroupname', query: { groupname: groupname } }} title="change group name">
            <BsFillPencilFill />
        </Link>
    );
}

export default ChangeGroupNameButton;
