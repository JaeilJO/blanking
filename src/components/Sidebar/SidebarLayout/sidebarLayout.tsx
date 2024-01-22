'use client';

import { useSideBarStatusStore } from '@/zustand/sideBarStatusStore';
import Sidebar from '..';
import style from './index.module.scss';
import classNames from 'classnames/bind';

import SideBarStatusButton from '../SideBarStatusButton';

const cn = classNames.bind(style);

function SideBarLayout({ userid }: { userid: string }) {
    const { status, close, open } = useSideBarStatusStore((state) => state);

    return (
        <nav className={cn({ sidebar_wrapper: true, close: status })}>
            <SideBarStatusButton />

            <Sidebar />
        </nav>
    );
}

export default SideBarLayout;
