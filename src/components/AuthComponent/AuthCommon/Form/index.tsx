import Input from './Input';
import SubmitButton from './SubmitButton';
import style from './index.module.scss';

function Form({}) {
    return (
        <form className={style.form_wrapper}>
            <Input></Input>
            <SubmitButton></SubmitButton>
        </form>
    );
}

export default Form;
