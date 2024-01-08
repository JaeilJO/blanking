import Link from 'next/link';
//wellcome page
function Page() {
    return (
        <div>
            wellcome to Blanking <Link href={'/auth/signin'}>Sign In</Link>
        </div>
    );
}

export default Page;
