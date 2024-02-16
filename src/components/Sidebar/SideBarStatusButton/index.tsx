'use client';

// Utils
import { useSideBarStatusStore } from '@/zustand/sideBarStatusStore';
import classNames from 'classnames/bind';
import { useCallback } from 'react';

// Style
import style from './index.module.scss';

// Icons
import { BsBoxArrowLeft } from 'react-icons/bs';

const cn = classNames.bind(style);

function SideBarStatusButton() {
    const { status, close, open } = useSideBarStatusStore((state) => state);

    const sideBarStatusHandler = useCallback(() => {
        if (status !== null) {
            if (status) {
                open();
            }
            if (!status) {
                close();
            }
        }
    }, [status, close, open]);

    return (
        <button
            className={cn({
                close_button: true,
                open_status: status,
            })}
            onClick={sideBarStatusHandler}
        >
            <BsBoxArrowLeft />
        </button>
    );
}

export default SideBarStatusButton;
