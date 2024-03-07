import style from "./index.module.scss";

import classNames from "classnames/bind";
import TextInputProps from "./index.type";
import { MouseEvent, useState } from "react";

const cn = classNames.bind(style);

function PasswordInput({
  //공통
  theme = "primary",
  fontSize = "body-01",
  disabled,

  // input props
  type = "password",
  name,
  placeholder,
  required,
  fontWeight = "font-light",

  // wrapper props
  display = "block",
  borderWidth = "border-thin",

  marginRight,
  marginLeft,
  marginTop,
  marginBottom,

  paddingRight,
  paddingLeft,
  paddingTop,
  paddingBottom,

  // icon props
  showIcon,
  hideIcon,

  ...props
}: TextInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const showPasswordHandler = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowPassword(!showPassword);
  };
  return (
    <div
      className={cn(
        "input-wrapper",
        "pr-4",
        "pl-4",
        "pt-3",
        "pb-3",
        display,
        borderWidth,
        marginRight,
        marginLeft,
        marginTop,
        marginBottom,
        paddingRight,
        paddingLeft,
        paddingTop,
        paddingBottom,
        theme,
        fontSize,
        { disabeld: disabled }
      )}
    >
      <input
        className={cn("input", fontSize, theme, fontWeight)}
        type={showPassword ? "text" : "password"}
        name={name}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        {...props}
      />
      <button
        className={cn("button", fontSize, theme)}
        onClick={showPasswordHandler}
      >
        {showPassword ? hideIcon : showIcon}
      </button>
    </div>
  );
}

export default PasswordInput;
