"use client";

// Style
import style from "./index.module.scss";

interface AuthTitleProps {
  title: string;
  subtitle: string;
}

function AuthTitle({ title, subtitle }: AuthTitleProps) {
  return (
    <div className={style["title-wrapper"]}>
      <div className={style["title"]}>{title}</div>
      <div className={style["sub-title"]}>{subtitle}</div>
    </div>
  );
}

export default AuthTitle;
