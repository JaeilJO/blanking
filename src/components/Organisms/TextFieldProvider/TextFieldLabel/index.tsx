"use client";

// Utils
import { useContext } from "react";
import { TextFieldContext } from "..";
import classNames from "classnames/bind";

// Style
import style from "./index.module.scss";

const cn = classNames.bind(style);

function TextFieldLabel() {
  const value = useContext(TextFieldContext);
  const { label, placeholder, isFocus, theme, disabled } = value!;

  // Label이 없을 경우 생성되지 않음
  if (!label) return null;

  const labelClassName = cn("basic", `text-${theme}`, {
    focus: isFocus,
    disabled: disabled,
  });

  return <label className={labelClassName}>{placeholder}</label>;
}

export default TextFieldLabel;
