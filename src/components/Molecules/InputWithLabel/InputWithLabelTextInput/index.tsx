"use client";

import Input from "@/components/Atoms/Input";
import TextInputProps from "@/components/Atoms/Input/TextInput/index.type";
import style from "./index.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";

const cn = classNames.bind(style);

interface InputWithLabelTextInputProps extends TextInputProps {
  isError?: boolean;
  isLoading?: boolean;
}

function InputWithLabelTextInput({
  type = "text",
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
}: InputWithLabelTextInputProps) {
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
      <Input.Text
        type={type}
        theme="primary"
        name={name}
        fontSize="body-01"
        borderWidth="border-medium"
        fontWeight="font-regular"
        required={required}
        onFocus={onFocus}
        onBlur={onBlur}
        {...props}
      />
    </div>
  );
}

export default InputWithLabelTextInput;
