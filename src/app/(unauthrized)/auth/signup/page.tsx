import SignUpComponent from '@/components/AuthComponent/SignUpComponent';
import { getServerSession } from 'next-auth';

async function Page() {
    const session = await getServerSession();

    return (
        <>
            <SignUpComponent></SignUpComponent>
        </>
    );
}

export default Page;
