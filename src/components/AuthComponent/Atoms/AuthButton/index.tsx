"use client";

// Utils
import { ReactNode } from "react";

// Style
import style from "./index.module.scss";

// Icons
import { AiOutlineLoading } from "react-icons/ai";

interface AuthButtonProps {
  value: string;

  /**
   * React Icon으로 적용해주세요
   */
  icon?: ReactNode;
  type: "submit" | "button";
  disabled?: boolean;
  onClick?: () => void;
}

function AuthButton({ value, icon, type, onClick, disabled }: AuthButtonProps) {
  return (
    <button
      className={style["button"]}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {disabled ? (
        <div className={style["disable-icon"]}>
          <AiOutlineLoading />
        </div>
      ) : (
        <>
          <div className={style["icon"]}>{icon}</div>
          <div>{value}</div>
        </>
      )}
    </button>
  );
}

export default AuthButton;
