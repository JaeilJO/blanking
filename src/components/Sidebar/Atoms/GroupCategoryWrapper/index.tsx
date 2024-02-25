// Style
import style from "./index.module.scss";

function GroupCategoryWrapper({ children }: { children: React.ReactNode }) {
  return <div className={style["wrapper"]}>{children}</div>;
}

export default GroupCategoryWrapper;
