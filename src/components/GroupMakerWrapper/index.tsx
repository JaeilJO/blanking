// Style
import style from './index.module.scss';

// Components
import GroupMaker from './GroupMaker';

function GroupMakerWrapper() {
    return (
        <div className={style.nogroup_content_wrapper}>
            <h1 className={style.title}>Make Group</h1>
            <GroupMaker />
            <div className={style.subscribe}>
                특수문자를 제외한 <b>영어 대 소문자 혹은 한글</b>만을 사용해주세요
            </div>
        </div>
    );
}

export default GroupMakerWrapper;
