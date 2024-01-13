import { config } from '@/utils/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

async function Page() {
    const session = await getServerSession(config);

    if (session) {
        redirect(`/user/${session.user.name}`);
    }
    redirect('/auth/signin');
}

export default Page;
