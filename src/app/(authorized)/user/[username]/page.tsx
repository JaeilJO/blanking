//Utils
import dynamic from 'next/dynamic';
import { getServerSession } from 'next-auth';
import { NextAuthOption } from '@/lib/nextAuth/auth';
import { redirect } from 'next/navigation';

//Style
import style from './page.module.scss';

//Components
const NoGroup = dynamic(() => import('@/components/NoGroup'), { ssr: false });

export default async function Page({ params }: { params: { username: string } }) {
    const session = await getServerSession(NextAuthOption);
    const paramUsername = decodeURIComponent(params.username);
    const username = session?.user.name as string;

    if (paramUsername !== username) {
        redirect('/not-found');
    }

    return (
        <div className={style.userpage_wrapper}>
            <NoGroup />
        </div>
    );
}
