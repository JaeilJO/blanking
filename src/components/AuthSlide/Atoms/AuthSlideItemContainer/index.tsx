"use client";

// Style
import style from "./index.module.scss";

interface AuthSlideItemContainerProps {
  children: React.ReactNode;
  onScroll: () => void;
}

function AuthSlideItemContainer({
  children,
  onScroll,
}: AuthSlideItemContainerProps) {
  return (
    <div onScroll={onScroll} className={style["auth-slide-container"]}>
      {children}
    </div>
  );
}

export default AuthSlideItemContainer;
