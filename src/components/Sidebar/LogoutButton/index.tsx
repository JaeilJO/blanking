'use client';

// Utils
import { signOut } from 'next-auth/react';

// Style
import style from './index.module.scss';

// Icons
import { BsDoorOpen } from 'react-icons/bs';

function LogoutButton() {
    return (
        <button className={style.logout_button} onClick={() => signOut()}>
            <span className={style.logout_icon}>
                <BsDoorOpen />
            </span>

            <span>Logout</span>
        </button>
    );
}

export default LogoutButton;
