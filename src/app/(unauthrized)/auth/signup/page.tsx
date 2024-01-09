import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import SignUpComponent from '@/components/AuthComponent/SignUpComponent';
import { getServerSession } from 'next-auth';

async function Page() {
    const session = await getServerSession(authOptions);

    return (
        <>
            <SignUpComponent></SignUpComponent>
        </>
    );
}

export default Page;
