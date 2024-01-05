import Link from 'next/link';
import style from './index.module.scss';
import { AuthComponent } from '../AuthCommon';

function SignInComponent() {
    return (
        <>
            <AuthComponent.Title title="Sign In" welcome_message="다시 찾아와 주셔서 감사합니다." />

            <AuthComponent.Form formType="signin" />

            <Link className={style.link_text} href={'#'}>
                비밀번호를 잊어버리셨나요?
            </Link>

            <div>
                <div>소셜 계정으로 시작하기</div>
                <button></button>
            </div>

            <div>
                <span>계정이 없으신가요?</span>
                <Link className={style.link_text} href={'/signup'}>
                    Sign up!
                </Link>
            </div>
        </>
    );
}

export default SignInComponent;
