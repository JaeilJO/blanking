import style from './index.module.scss';
function FormWrapper({ children }: { children: React.ReactNode }) {
    return <div className={style.form_wrapper}>{children}</div>;
}

export default FormWrapper;
