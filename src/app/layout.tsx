import type { Metadata } from 'next';
import './global.scss';
// import localFont from 'next/font/local'; // local font
// import { Inter } from 'next/font/google' // google font

/**
 * Local Font를 사용법
 * 1. 사용할 폰트를 종류별로 font폴더에 넣는다
 * 2. { path: './font/폰트이름.확장자', weight: '원하는폰트 굵기', style: '해당폰트가 기울임인지 일반인지' },
 * wegiht는 100, 200, 300, 400, 500, 600, 700, 800, 900 중에 하나로 주는데 위의 weight는 string 값으로 줘야한다
 * style은 normal, italic 중에 하나로 주는데 위의 style은 string 값으로 줘야한다
 * display는 원하는 것을 주면 된다.
 * 적용방법은 fontName.className을 className에 넣어주면 된다
 */

/**
 * Google Font를 사용법
 * 1. google에 있는 폰트만 가능
 */

export const metadata: Metadata = {
    title: 'Nextjs 14 + SCSS + Stroybook',
    description: 'Nextjs 14와 SCSS 그리고 Storybook을 사용한 템플릿입니다 추가로 classnames라는 모듈도 사용되었습니다.',
};

/* local font
const fontName = localFont({
    src: [
        { path: './font/파일명.확장자', weight: '굵기', style: '스타일' },
        { path: './font/파일명.확장자', weight: '굵기', style: '스타일' },
        { path: './font/파일명.확장자', weight: '굵기', style: '스타일' },
    ],
    display: 'swap',
});
*/

/* google font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
*/
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
