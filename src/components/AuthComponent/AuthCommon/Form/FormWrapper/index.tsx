import style from './index.module.scss';
function FormWrapper({ children }: { children: React.ReactNode }) {
    return <form className={style.form_wrapper}>{children}</form>;
}

export default FormWrapper;
