"use client";

import style from "./index.module.scss";
import classNames from "classnames/bind";
import { ChangeEventHandler, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

interface InputProps {
  name: string;

  type?: "text" | "password" | "email";
  placeholder?: string;
  required?: boolean;
  textAlign?: "left" | "center" | "right";
  disabled?: boolean;
  theme?: "default" | "primary" | "gray" | "warn";

  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

const cn = classNames.bind(style);

function Input({
  name,

  type = "text",
  placeholder,
  required = true,
  textAlign = "left",
  disabled = false,
  theme = "default",

  onChange,
}: InputProps) {
  const inputClassName = cn("input", {
    left: textAlign === "left",
    center: textAlign === "center",
    right: textAlign === "right",
  });

  const inputWrapperClassName = cn("input-wrapper", {
    default: theme === "default",
    primary: theme === "primary",
    gray: theme === "gray",
    warn: theme === "warn",

    disabled: disabled,
  });
  const [isHide, setIsHide] = useState(false);

  const passwordToggleHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsHide(!isHide);
  };

  return (
    <div className={inputWrapperClassName}>
      <input
        className={inputClassName}
        type={type === "password" ? (isHide ? "text" : "password") : type}
        name={name}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />

      {type === "password" && (
        <button
          className={style["password-button"]}
          onClick={passwordToggleHandler}
        >
          {isHide ? <BsEyeSlash /> : <BsEye />}
        </button>
      )}
    </div>
  );
}

export default Input;
