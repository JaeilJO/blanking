import Link from "next/link";
import BaseLinkProps from "./index.type";
import style from "./index.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(style);

export type LinkColorTheme =
  | "primary"
  | "black"
  | "gray"
  | "light-gray"
  | "red"
  | "yellow"
  | "green"
  | "white";

function BaseLink(props: BaseLinkProps) {
  const {
    href,

    display,

    fontSize = "body-01",
    fontWeight = "font-light",
    textAlign = "text-center",
    textColor = "text-white",

    icon,

    backgroundColor,

    borderWidth,
    borderColor,

    marginTop,
    marginRight,
    marginBottom,
    marginLeft,

    paddingTop,
    paddingBottom,
    paddingRight,
    paddingLeft,

    children,

    disabled,

    style,
  } = props;

  const linkClassName = cn(
    "link",
    backgroundColor,
    borderColor,
    textColor,
    display,
    borderWidth,
    fontSize,
    fontWeight,
    textAlign,
    marginBottom,
    marginLeft,
    marginTop,
    marginRight,
    paddingTop,
    paddingBottom,
    paddingRight,
    paddingLeft,
    { disabled: disabled }
  );

  return (
    <Link href={href} className={linkClassName} style={style}>
      {icon}
      {children}
    </Link>
  );
}

export default BaseLink;
