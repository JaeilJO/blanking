import classNames from "classnames/bind";

import style from "./index.module.scss";
import LineButtonProps from "./index.type";

const cn = classNames.bind(style);

function LineButton({
  theme,
  display,
  fontSize,
  fontWeight = "font-light",
  textAlign,
  icon,
  children,
  borderWidth,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  disabled,
  ...props
}: LineButtonProps) {
  return (
    <button
      className={cn(
        "button",
        theme,
        "pr-3",
        "pl-3",
        "pt-2",
        "pb-2",
        display,
        fontSize,
        fontWeight,
        textAlign,
        borderWidth,
        marginBottom,
        marginLeft,
        marginRight,
        marginTop
      )}
      disabled={disabled}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}

export default LineButton;
