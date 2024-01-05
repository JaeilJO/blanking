import style from './index.module.scss';

interface SubmitButtonProps {
    value: string;
    disabeld?: boolean;
}

function SubmitButton({ value, disabeld = false }: SubmitButtonProps) {
    return <input type="submit" className={style.input_button} disabled={disabeld} value={value} />;
}

export default SubmitButton;
