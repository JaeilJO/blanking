"use client";

import style from "./index.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { LineInputProps } from "./index.type";

const cn = classNames.bind(style);

// Password Toggle Button
interface PasswordToggleButtonProps {
  isHide: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}
const PasswordToggleButton = ({
  isHide,
  onClick,
  disabled,
}: PasswordToggleButtonProps) => (
  <button
    className={style["password-button"]}
    onClick={onClick}
    disabled={disabled}
  >
    {isHide ? <BsEyeSlash /> : <BsEye />}
  </button>
);

function LineInput({
  name,
  type = "text",
  placeholder,
  required = true,
  textAlign = "left",
  theme = "default",
  ...props
}: LineInputProps) {
  const [isHide, setIsHide] = useState(false);

  const togglePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsHide(!isHide);
  };

  // 스타일 결정 로직
  const inputClassName = cn("input", textAlign);
  const inputWrapperClassName = cn("input-wrapper", `${theme}`, {
    disabled: props.disabled,
  });

  return (
    <div className={inputWrapperClassName}>
      <input
        className={inputClassName}
        type={type === "password" ? (isHide ? "text" : "password") : type}
        name={name}
        required={required}
        placeholder={placeholder}
        {...props}
      />

      {type === "password" && (
        <PasswordToggleButton
          isHide={isHide}
          onClick={togglePasswordVisibility}
          disabled={props.disabled}
        />
      )}
    </div>
  );
}

export default LineInput;
