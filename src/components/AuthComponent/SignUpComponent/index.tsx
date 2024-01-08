import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { AuthComponent } from '../AuthCommon';
import style from './index.module.scss';

const socials = ['google'];

function SignUpComponent() {
    const { data } = useSession();

    if (data) {
        redirect(`/${data?.user?.name}`);
    }

    return (
        <div className={style.auth_wrapper}>
            <AuthComponent.Title title="Sign Up" welcome_message="환영합니다." />

            <AuthComponent.Form formType="signup" />

            <AuthComponent.Social socials={socials} />

            <AuthComponent.AccountInquery authType={'signup'} />
        </div>
    );
}

export default SignUpComponent;
