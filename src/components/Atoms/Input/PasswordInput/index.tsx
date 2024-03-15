// Utils
import classNames from "classnames/bind";
import { MouseEvent, useState } from "react";

// Style
import style from "./index.module.scss";

// Type
import TextInputProps from "./index.type";

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
        "pr-2",
        "pl-2",
        "pt-2",
        "pb-2",

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
        className={cn("input", fontSize, theme, fontWeight, {
          hide: !showPassword,
        })}
        type={showPassword ? "text" : "password"}
        name={name}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        {...props}
      />

      {/* Hide Button */}
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
