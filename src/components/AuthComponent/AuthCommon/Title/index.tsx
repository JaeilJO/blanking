import style from './index.module.scss';

interface TitleProps {
    title: 'Sign In' | 'Sign Up' | '비밀번호 찾기';
    welcome_message:
        | '다시 찾아와 주셔서 감사합니다.'
        | '환영합니다.'
        | '비밀번호를 찾기 위해서는 이메일 확인이 필요합니다'
        | '새로운 비밀번호를 입력해주세요';
}

function Title({ title, welcome_message }: TitleProps) {
    return (
        <div className={style.title_wrapper}>
            <h1 className={style.title}>{title}</h1>
            <div className={style.welcome_message}>{welcome_message}</div>
        </div>
    );
}

export default Title;
