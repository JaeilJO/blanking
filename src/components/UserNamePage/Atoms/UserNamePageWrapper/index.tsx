"use client";

// Utils
import classNames from "classnames/bind";

// Style
import style from "./index.module.scss";

const cn = classNames.bind(style);

function UserNamePageWrapper({ children }: { children: React.ReactNode }) {
  return <div className={cn("wrapper")}>{children}</div>;
}

export default UserNamePageWrapper;
