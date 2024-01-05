import style from './index.module.scss';

interface TitleProps {
    title: 'Sign In' | 'Sign Up';
    welcome_message: '다시 찾아와 주셔서 감사합니다.' | '환영합니다.';
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
