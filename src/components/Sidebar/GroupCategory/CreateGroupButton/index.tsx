// Utils
import Link from 'next/link';

// Style
import style from './index.module.scss';

// Icons
import { BsFillPlusSquareFill } from 'react-icons/bs';

function CreateGroupButton() {
    return (
        <li>
            <Link className={style.create_group_button} href={`/user/creategroup`}>
                <span className={style.create_group_button_icon}>
                    <BsFillPlusSquareFill />
                </span>

                <span>Group 생성</span>
            </Link>
        </li>
    );
}

export default CreateGroupButton;
