import classNames from "classnames/bind";
import style from "./index.module.scss";
import { BaseButtonProps } from "./index.type";

const cn = classNames.bind(style);

export type buttonColorTheme =
  | "primary"
  | "black"
  | "gray"
  | "light-gray"
  | "red"
  | "yellow"
  | "green"
  | "white";

function BaseButton(props: BaseButtonProps) {
  const {
    backgroundColor,
    display = "block",

    fontSize = "body-01",
    fontWeight = "font-light",
    textAlign = "text-center",
    textColor = "text-white",

    icon,

    type = "button",

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

    disabled,

    children,
    ...otherProps
  } = props;

  const buttonClass = cn(
    "button",

    backgroundColor,
    borderColor,
    textColor,

    display,

    fontSize,
    fontWeight,
    textAlign,

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
      disabled={disabled}
      className={buttonClass}
      {...otherProps}
    >
      {icon}
      {children}
    </button>
  );
}

export default BaseButton;
