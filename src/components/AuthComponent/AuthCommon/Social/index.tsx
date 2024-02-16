// Style
import style from './index.module.scss';

//Components
import SocialButton from './SocialButton';

function Social({ socials }: { socials: string[] }) {
    return (
        <div className={style.social_wrapper}>
            <div className={style.social_text}>소셜 계정으로 시작하기</div>
            <ul>
                {socials.map((social) => (
                    <li key={social}>
                        <SocialButton socialType={social} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Social;
