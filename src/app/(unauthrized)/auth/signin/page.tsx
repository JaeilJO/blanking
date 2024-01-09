import SignInComponent from '@/components/AuthComponent/SignInComponent';
import { config } from '@/utils/auth';
import { cookies, headers } from 'next/headers';
import { getServerSession as originalGetServerSession } from 'next-auth';

async function Page() {
    return (
        <>
            <SignInComponent />
        </>
    );
}

export default Page;
