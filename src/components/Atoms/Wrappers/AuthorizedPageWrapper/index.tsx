import style from "./index.module.scss";

function AuthorizedPageWrapper({ children }: { children: React.ReactNode }) {
  return <div className={style["wrapper"]}>{children}</div>;
}

export default AuthorizedPageWrapper;
