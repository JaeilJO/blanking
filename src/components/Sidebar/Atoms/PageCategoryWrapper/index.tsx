// Style
import style from "./index.module.scss";

function PageCategoryWrapper({ children }: { children: React.ReactNode }) {
  return <div className={style["wrapper"]}>{children}</div>;
}

export default PageCategoryWrapper;
