import style from "./index.module.scss";

function UserNamePageWrapper({ children }: { children: React.ReactNode }) {
  return <div className={style["wrapper"]}>{children}</div>;
}

export default UserNamePageWrapper;
