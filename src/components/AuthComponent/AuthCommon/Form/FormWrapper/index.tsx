//Style
import style from './index.module.scss';

function FormWrapper({
    children,
    onSubmit,
}: {
    children: React.ReactNode;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
    return (
        <form className={style.form_wrapper} onSubmit={onSubmit}>
            {children}
        </form>
    );
}

export default FormWrapper;
