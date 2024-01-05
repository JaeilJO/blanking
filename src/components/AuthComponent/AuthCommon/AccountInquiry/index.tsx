import Link from 'next/link';
import style from './index.module.scss';

function AccountInquery({ authType }: { authType: 'sign in' | 'sign up' }) {
    return (
        <div className={style.account_inquiry_wrapper}>
            <span>{authType === 'sign in' ? '계정이 이미 있으신가요?' : '계정이 없으신가요?'}</span>
            <Link className={style.link_text} href={authType === 'sign in' ? '/' : '/signup'}>
                {authType.toUpperCase()}
            </Link>
        </div>
    );
}

export default AccountInquery;
