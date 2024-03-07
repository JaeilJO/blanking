import classNames from "classnames/bind";
import style from "./index.module.scss";

import SolidButtonProps from "./index.type";

const cn = classNames.bind(style);
function SolidButton({
  theme,
  display = "block",
  children,
  icon,
  fontSize,
  fontWeight,
  textAlign = "text-center",
  marginBottom,
  marginTop,
  marginLeft,
  marginRight,
  disabled,
  type = "button",
  ...props
}: SolidButtonProps) {
  return (
    <button
      disabled={disabled}
      type={type}
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
        marginBottom,
        marginLeft,
        marginTop,
        marginRight
      )}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}

export default SolidButton;
