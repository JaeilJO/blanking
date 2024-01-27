'use client';

import { useSideBarStatusStore } from '@/zustand/sideBarStatusStore';
import Sidebar from '..';
import style from './index.module.scss';
import classNames from 'classnames/bind';

import SideBarStatusButton from '../SideBarStatusButton';
import { useEffect } from 'react';

const cn = classNames.bind(style);

function SideBarLayout({ subkey }: { subkey: string }) {
    const { status, close, open } = useSideBarStatusStore((state) => state);
    const handleResize = () => {
        if (window.innerWidth < 768) {
            close();
        } else {
            open();
        }
    };
    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    return (
        <nav className={cn({ sidebar_wrapper: true, close: status })}>
            <SideBarStatusButton />

            <Sidebar subkey={subkey} />
        </nav>
    );
}

export default SideBarLayout;
