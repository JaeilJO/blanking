import Link from 'next/link';
import { AuthComponent } from '../AuthCommon';

function SignInComponent() {
    return (
        <>
            <AuthComponent.Title title="Sign In" welcome_message="다시 찾아와 주셔서 감사합니다." />

            <AuthComponent.Form.FormWrapper>
                <AuthComponent.Form.Input type="email" />
                <AuthComponent.Form.Input type="password" />
                <AuthComponent.Form.SubmitButton />
            </AuthComponent.Form.FormWrapper>

            <Link href={'#'}>비밀번호를 잊어버리셨나요?</Link>

            <div>
                <div>소셜 계정으로 시작하기</div>
                <button></button>
            </div>

            <div>
                <span>계정이 없으신가요?</span>
                <Link href={'/sign up'}>Sign up!</Link>
            </div>
        </>
    );
}

export default SignInComponent;
