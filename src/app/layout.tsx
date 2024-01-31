import type { Metadata } from 'next';
import './global.scss';
import localFont from 'next/font/local';
import AuthSession from '@/components/AuthSession';
import ToastAlert from '@/components/ToastAlert';
import { redirect } from 'next/navigation';
import MobileModal from '@/components/MobileModal';

export const metadata: Metadata = {
    title: 'Blanking',
    description: 'Blanking',
};

const nanum_square = localFont({
    src: [
        { path: './font/NanumSquareB.ttf', weight: '700', style: 'normal' },
        { path: './font/NanumSquareEB.ttf', weight: '800', style: 'normal' },
        { path: './font/NanumSquareL.ttf', weight: '300', style: 'normal' },
        { path: './font/NanumSquareR.ttf', weight: '500', style: 'normal' },
    ],
    display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    let userAgent = navigator.userAgent;
    let isMobile = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
        isMobile = true;
    }

    return (
        <html lang="en">
            <body className={nanum_square.className}>
                {isMobile && <MobileModal />}

                <ToastAlert />
                <AuthSession>{children}</AuthSession>
            </body>
        </html>
    );
}
