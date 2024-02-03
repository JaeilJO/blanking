import Link from 'next/link';
import style from './index.module.scss';

function AccountInquery({ authType }: { authType: 'signin' | 'signup' | 'changePassword' }) {
    if (authType === 'signin') {
        return (
            <div className={style.account_inquiry_wrapper}>
                <span>계정이 없으신가요?</span>
                <Link className={style.link_text} href={'/auth/signup'}>
                    Sign Up
                </Link>
            </div>
        );
    }

    if (authType === 'signup') {
        return (
            <div className={style.account_inquiry_wrapper}>
                <span>계정이 이미 있으신가요?</span>
                <Link className={style.link_text} href={'/auth/signin'}>
                    Sign In
                </Link>
            </div>
        );
    }

    if (authType === 'changePassword') {
        return (
            <div className={style.account_inquiry_wrapper}>
                <span>비밀번호가 생각나셨나요?</span>
                <Link className={style.link_text} href={'/auth/signin'}>
                    Sign In
                </Link>
            </div>
        );
    }
}

export default AccountInquery;
