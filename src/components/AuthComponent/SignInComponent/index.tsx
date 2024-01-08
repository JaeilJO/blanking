'use client';

import Link from 'next/link';
import style from './index.module.scss';
import { AuthComponent } from '../AuthCommon';
import social_login_list from '@/utils/socialLoginList';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

function SignInComponent() {
    const { data } = useSession();

    if (data) {
        redirect(`/${data?.user?.name}`);
    }

    return (
        <div className={style.auth_wrapper}>
            <AuthComponent.Title title="Sign In" welcome_message="다시 찾아와 주셔서 감사합니다." />

            <AuthComponent.Form formType="signin" />

            <Link className={style.link_text} href={'#'}>
                비밀번호를 잊어버리셨나요?
            </Link>

            <AuthComponent.Social socials={social_login_list} />

            <AuthComponent.AccountInquery authType={'signin'} />
        </div>
    );
}

export default SignInComponent;
