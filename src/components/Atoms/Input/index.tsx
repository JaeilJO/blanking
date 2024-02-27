"use client";

import style from "./index.module.scss";
import classNames from "classnames/bind";
import { ChangeEventHandler } from "react";

interface InputProps {
  type: "text" | "password" | "email";
  name: string;

  placeholder?: string;
  required?: boolean;
  textAlign?: "left" | "center" | "right";
  disabled?: boolean;
  theme?: "default" | "primary" | "gray" | "warn";

  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

const cn = classNames.bind(style);

function Input({
  type,
  placeholder,
  required,
  onChange,
  name,
  disabled,
  textAlign = "left",
  theme = "default",
}: InputProps) {
  const className = cn("input", {
    left: textAlign === "left",
    center: textAlign === "center",
    right: textAlign === "right",

    default: theme === "default",
    primary: theme === "primary",
    gray: theme === "gray",
    warn: theme === "warn",
  });
  return (
    <input
      className={className}
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
    />
  );
}

export default Input;
