"use client";

// Style
import style from "./index.module.scss";

interface AuthSlideWrapperProps {
  children: React.ReactNode;
}

function AuthSlideWrapper({ children }: AuthSlideWrapperProps) {
  return <div className={style["auth-slide-wrapper"]}>{children}</div>;
}

export default AuthSlideWrapper;
