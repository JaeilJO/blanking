import type { Metadata } from 'next';
import './global.scss';
import localFont from 'next/font/local';
import AuthSession from '@/components/AuthSession';

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
    return (
        <html lang="en">
            <body className={nanum_square.className}>
                <AuthSession>{children}</AuthSession>
            </body>
        </html>
    );
}
