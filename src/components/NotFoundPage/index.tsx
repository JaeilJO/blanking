// Utils
import Link from 'next/link';

// Style
import style from './index.module.scss';

function NotFoundPage() {
    return (
        <div className={style.background}>
            <div className={style.not_fount_wrapper}>
                <div className={style.title}>올바르지 않은 접근입니다</div>
                <Link className={style.button} href={'/user'}>
                    다시 시도해보기
                </Link>
            </div>
        </div>
    );
}

export default NotFoundPage;
