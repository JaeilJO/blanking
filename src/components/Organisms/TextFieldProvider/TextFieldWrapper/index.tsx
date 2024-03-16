"use client";

import { useContext } from "react";
import { TextFieldContext } from "..";
import classNames from "classnames/bind";
import style from "./index.module.scss";

interface TextFiedlWrapperProps {
  children: React.ReactNode;
}

const cn = classNames.bind(style);

function TextFieldWrapper({ children }: TextFiedlWrapperProps) {
  const value = useContext(TextFieldContext);
  const { isFocus, disabled, theme } = value!;

  const wrapperClassName = cn("wrapper", {
    "border-light-gray": !isFocus,
    [`border-${theme}`]: isFocus,
    focus: isFocus,

    disabled: disabled,
  });

  return <div className={wrapperClassName}>{children}</div>;
}

export default TextFieldWrapper;
