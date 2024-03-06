import classNames from "classnames/bind";
import style from "./index.module.scss";

import TextButtonProps from "./index.type";

const cn = classNames.bind(style);

function TextButton({
  theme,
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
  ...props
}: TextButtonProps) {
  return (
    <button
      disabled={disabled}
      className={cn(
        "button",
        (theme = "primary"),
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
