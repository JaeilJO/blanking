import style from "./index.module.scss";
function AuthLayoutWrapper({ children }: { children: React.ReactNode }) {
  return <div className={style["wrapper"]}>{children}</div>;
}

export default AuthLayoutWrapper;
