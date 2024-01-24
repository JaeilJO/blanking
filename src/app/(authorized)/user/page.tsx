import { config } from '@/utils/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

async function Page() {
    const session = await getServerSession(config);
    const username = session?.user.name;
    if (session) {
        redirect(`/user/${username}`);
    }
    redirect('/auth/signin');
}

export default Page;
