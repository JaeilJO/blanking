import classNames from "classnames/bind";
import style from "./index.module.scss";

import TextButtonProps from "./index.type";

const cn = classNames.bind(style);

function TextButton({
  theme = "primary",
  display = "block",
  children,
  fontSize,
  fontWeight,
  textAlign = "text-center",
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  disabled,
  type = "button",
  ...props
}: TextButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        "button",
        theme,
        display,
        fontSize,
        fontWeight,
        textAlign,
        marginBottom,
        marginLeft,
        marginRight,
        marginTop
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default TextButton;
