import Link from 'next/link';

function Page() {
    return (
        <div>
            <div>wellcome to Blanking</div> <Link href={'/auth/signin'}>Sign In</Link>
        </div>
    );
}

export default Page;
