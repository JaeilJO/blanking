"use client";

// Utils
import { ReactNode } from "react";

// Style
import style from "./index.module.scss";

interface AuthButtonProps {
  value: string;

  /**
   * React Icon으로 적용해주세요
   */
  icon?: ReactNode;
  type: "submit" | "button";
  onClick?: () => void;
}

function AuthButton({ value, icon, type, onClick }: AuthButtonProps) {
  return (
    <button className={style["button"]} type={type} onClick={onClick}>
      <div className={style["icon"]}>{icon}</div>
      <div>{value}</div>
    </button>
  );
}

export default AuthButton;
