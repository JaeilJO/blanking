import SocialButton from './SocialButton';
import style from './index.module.scss';

function Social() {
    return (
        <div>
            <div className={style.social_text}>소셜 계정으로 시작하기</div>
            <ul>
                <li>
                    <SocialButton socialType="google" />
                </li>
            </ul>
        </div>
    );
}

export default Social;
