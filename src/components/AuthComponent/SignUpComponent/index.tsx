import { AuthComponent } from '../AuthCommon';
import style from './index.module.scss';

const socials = ['google'];

function SignUpComponent() {
    return (
        <div className={style.auth_wrapper}>
            <AuthComponent.Title title="Sign Up" welcome_message="환영합니다." />

            <AuthComponent.SignUpForm />

            <AuthComponent.Social socials={socials} />

            <AuthComponent.AccountInquery authType={'signup'} />
        </div>
    );
}

export default SignUpComponent;
