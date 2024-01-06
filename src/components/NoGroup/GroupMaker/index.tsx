import style from './index.module.scss';
import { BsPlusCircle } from 'react-icons/bs';

function GroupMaker() {
    return (
        <form className={style.group_maker_form}>
            <label className={style.group_maker_submit_button} htmlFor="group_maker_submit">
                <BsPlusCircle />
            </label>

            <input id="group_maker_submit" className={style.group_maker_submit} type="submit" />
            <input
                required
                type="text"
                className={style.group_maker_text_input}
                placeholder="Group 이름을 입력해주세요"
            />
        </form>
    );
}

export default GroupMaker;
