'use client';

import style from './index.module.scss';
import { BsDoorOpen } from 'react-icons/bs';
import { signOut } from 'next-auth/react';

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
