"use client";

// Style
import style from "./index.module.scss";

interface AuthSlideItemWrapperProps {
  children: React.ReactNode;
}

function AuthSlideItemWrapper({ children }: AuthSlideItemWrapperProps) {
  return <div className={style["auth-slide-item-wrapper"]}>{children}</div>;
}

export default AuthSlideItemWrapper;
