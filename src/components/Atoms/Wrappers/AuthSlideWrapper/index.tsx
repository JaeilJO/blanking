"use client";

import style from "./index.module.scss";

function AuthSlideWrapper({ children }: { children: React.ReactNode }) {
  return <div className={style["wrapper"]}>{children}</div>;
}

export default AuthSlideWrapper;
