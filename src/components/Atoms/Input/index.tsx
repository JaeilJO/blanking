"use client";

import style from "./index.module.scss";
import classNames from "classnames/bind";
import { ChangeEventHandler } from "react";

interface InputProps {
  type: "text" | "password" | "email";
  placeholder?: string | undefined;
  required?: boolean | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  disabled?: boolean;
  name: string;
  bodrder?: boolean;
  textAlign?: "left" | "center" | "right";
  theme: "default" | "primary" | "gray" | "warn";
}

const cn = classNames.bind(style);

function Input({
  type,
  bodrder = true,
  placeholder,
  required,
  onChange,
  name,
  disabled,
  textAlign = "left",
  theme = "default",
}: InputProps) {
  const className = cn("input", {
    border: bodrder,

    left: textAlign === "left",
    center: textAlign === "center",
    right: textAlign === "right",

    disabled: disabled,

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
    />
  );
}

export default Input;
