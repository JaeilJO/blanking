//Utils
import { NextAuthOption } from '@/lib/nextAuth/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

async function Page() {
    const session = await getServerSession(NextAuthOption);
    const username = session?.user.name;
    if (session) {
        redirect(`/user/${username}`);
    }
    redirect('/auth/signin');
}

export default Page;
