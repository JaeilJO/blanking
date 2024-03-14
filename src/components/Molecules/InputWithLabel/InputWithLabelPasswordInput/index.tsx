"use client";

import Input from "@/components/Atoms/Input";

import style from "./index.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import PasswordInputProps from "@/components/Atoms/Input/PasswordInput/index.type";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const cn = classNames.bind(style);

function InputWithLabelPasswordInput({
  type = "password",
  placeholder = "placeholder",
  name,
  required,
  disabled,

  marginBottom,
  marginRight,
  marginLeft,
  marginTop,

  paddingBottom,
  paddingTop,
  paddingLeft,
  paddingRight,

  ...props
}: PasswordInputProps) {
  const [isFocus, setIsFocus] = useState(false);

  const onFocus = () => {
    setIsFocus(true);
  };
  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setIsFocus(true);
    } else {
      setIsFocus(false);
    }
  };

  return (
    <div className={style["wrapper"]}>
      <label className={cn("label", { focus: isFocus })}>{placeholder}</label>

      <Input.Password
        theme="primary"
        name={name}
        fontSize="body-01"
        borderWidth="border-medium"
        onFocus={onFocus}
        onBlur={onBlur}
        fontWeight="font-regular"
        required={required}
        showIcon={<BsEye />}
        hideIcon={<BsEyeSlash />}
        {...props}
      />
    </div>
  );
}

export default InputWithLabelPasswordInput;
