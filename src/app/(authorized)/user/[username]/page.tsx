import style from './page.module.scss';
import NoGroup from '@/components/NoGroup';

export default async function Page() {
    return (
        <div className={style.userpage_wrapper}>
            <NoGroup />
        </div>
    );
}
