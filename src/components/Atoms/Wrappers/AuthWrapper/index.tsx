import style from "./index.module.scss";

function AuthWrapper({ children }: { children: React.ReactNode }) {
  return <div className={style["wrapper"]}>{children}</div>;
}

export default AuthWrapper;
