"use client";

import Input from "@/components/Atoms/Input";

import style from "./index.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import PasswordInputProps from "@/components/Atoms/Input/PasswordInput/index.type";

interface InputWithLabelPasswordInputProps extends PasswordInputProps {}
const cn = classNames.bind(style);

function InputWithLabelPasswordInput({
  type = "password",
  placeholder = "placeholder",
  name,
  required,
  marginBottom,
  marginRight,
  marginLeft,
  marginTop,
  paddingBottom,
  paddingTop,
  paddingLeft,
  paddingRight,
  disabled,
  ...props
}: InputWithLabelPasswordInputProps) {
  const [isFocus, setIsFocus] = useState(false);

  const onFocus = () => {
    setIsFocus(true);
  };
  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value) {
      console.log(e.target.value);
      setIsFocus(true);
    } else {
      setIsFocus(false);
    }
  };
  return (
    <div className={style["wrapper"]}>
      <label className={cn("label", { focus: isFocus, required: required })}>
        {placeholder}
      </label>
      <Input.Password
        theme="primary"
        name={name}
        fontSize="body-01"
        borderWidth="border-medium"
        onFocus={onFocus}
        onBlur={onBlur}
        required={required}
        {...props}
      />
    </div>
  );
}

export default InputWithLabelPasswordInput;
