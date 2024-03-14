// Utils
import classNames from "classnames/bind";

// Styles
import style from "./index.module.scss";

// Type
import { BaseButtonProps } from "./index.type";

const cn = classNames.bind(style);

function BaseButton(props: BaseButtonProps) {
  // Props
  const {
    display = "block",

    fontSize = "body-01",
    fontWeight = "font-light",
    textAlign = "text-center",
    textColor = "text-white",

    icon,

    type = "button",

    backgroundColor,

    borderWidth,
    borderColor,

    marginTop,
    marginBottom,
    marginLeft,
    marginRight,

    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,

    children,

    ...otherProps
  } = props;

  const buttonClass = cn(
    "button",

    display,

    fontSize,
    fontWeight,
    textAlign,

    backgroundColor,

    borderColor,
    textColor,

    borderWidth,

    marginBottom,
    marginLeft,
    marginTop,
    marginRight,

    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop
  );

  return (
    <button
      type={type}
      disabled={otherProps.disabled}
      className={buttonClass}
      style={otherProps.style}
      {...otherProps}
    >
      {icon}
      {children}
    </button>
  );
}

export default BaseButton;
