import style from "./index.module.scss";

function ModalWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className={style["modal-background"]}>
      <div className={style["modal"]}>{children}</div>
    </div>
  );
}

export default ModalWrapper;
