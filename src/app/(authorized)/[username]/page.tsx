import { basic_mock } from '@/mock/basic';
import style from './page.module.scss';
import NoGroup from '@/components/NoGroup';

export default function Page({ params }: { params: { username: string } }) {
    const user = basic_mock;

    if (user.groups === undefined) return <div>페이지가 없습니다</div>;

    return (
        <div className={style.userpage_wrapper}>
            <NoGroup />
        </div>
    );
}
