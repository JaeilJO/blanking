// Style
import style from "./index.module.scss";

function GroupPageTableWrapper({ children }: { children: React.ReactNode }) {
  return <div className={style["wrapper"]}>{children}</div>;
}

export default GroupPageTableWrapper;
