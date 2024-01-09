import Link from 'next/link';
import style from './index.module.scss';

function AccountInquery({ authType }: { authType: 'signin' | 'signup' }) {
    return (
        <div className={style.account_inquiry_wrapper}>
            <span>{authType === 'signin' ? '계정이 이미 있으신가요?' : '계정이 없으신가요?'}</span>
            <Link className={style.link_text} href={authType === 'signin' ? '/auth/signup' : '/auth/signin'}>
                {authType === 'signin' ? 'Sign Up' : 'Sign In'}
            </Link>
        </div>
    );
}

export default AccountInquery;
