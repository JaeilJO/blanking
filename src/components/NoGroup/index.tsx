import GroupMaker from './GroupMaker';
import style from './index.module.scss';

function NoGroup() {
    return (
        <div>
            <div className={style.nogroup_content_wrapper}>
                <h1 className={style.title}>Make Group</h1>
                <GroupMaker />
                <div>특수문자를 제외한 영어 대 소문자 혹은 한글만을 사용해주세요</div>
            </div>
        </div>
    );
}

export default NoGroup;
