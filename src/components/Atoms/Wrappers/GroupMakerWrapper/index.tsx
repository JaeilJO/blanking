import style from "./index.module.scss";

function GroupMakerWrapper({ children }: { children: React.ReactNode }) {
  return <div className={style["wrapper"]}>{children}</div>;
}

export default GroupMakerWrapper;
