'use client';

// Utils
import { useSideBarStatusStore } from '@/zustand/sideBarStatusStore';
import classNames from 'classnames/bind';
import { useCallback, useEffect } from 'react';

// Style
import style from './index.module.scss';

// Components
import Sidebar from '..';
import SideBarStatusButton from '../SideBarStatusButton';

const cn = classNames.bind(style);

function SideBarLayout({ subkey }: { subkey: string }) {
    const { status, close, open } = useSideBarStatusStore((state) => state);
    const handleResize = useCallback(() => {
        if (window.innerWidth < 768) {
            close();
        } else {
            open();
        }
    }, [close, open]);
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
