import style from "./index.module.scss";

function ModalBox({ children }: { children: React.ReactNode }) {
  return (
    <div className={style["background"]}>
      <div className={style["modal"]}>{children}</div>
    </div>
  );
}

export default ModalBox;
