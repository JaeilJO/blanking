'use client';

import { useSideBarStatusStore } from '@/zustand/sideBarStatusStore';
import Sidebar from '..';
import style from './index.module.scss';
import classNames from 'classnames/bind';
import { BsBoxArrowLeft } from 'react-icons/bs';
import { useCallback } from 'react';
import SideBarStatusButton from '../SideBarStatusButton';

const cn = classNames.bind(style);

function SideBarLayout() {
    const { status, close, open } = useSideBarStatusStore((state) => state);

    const sideBarStatusHandler = useCallback(() => {
        if (status) {
            open();
        }
        if (!status) {
            close();
        }
    }, [status]);

    return (
        <nav className={cn({ sidebar_wrapper: true, close: status })}>
            <SideBarStatusButton />

            <Sidebar />
        </nav>
    );
}

export default SideBarLayout;
