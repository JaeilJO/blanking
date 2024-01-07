import style from './index.module.scss';
import { BsDoorOpen } from 'react-icons/bs';

function LogoutButton() {
    return (
        <button className={style.logout_button}>
            <span className={style.logout_icon}>
                <BsDoorOpen />
            </span>

            <span>Logout</span>
        </button>
    );
}

export default LogoutButton;
