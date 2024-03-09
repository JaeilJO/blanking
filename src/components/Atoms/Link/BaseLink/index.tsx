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
    // Class Name에 지장이 안가는 값들
    href,
    icon,
    children,

    backgroundColor,
    borderColor,
    textColor,
    display,
    borderWidth,
    fontSize,
    fontWeight,
    textAlign,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    paddingTop,
    paddingBottom,
    paddingRight,
    paddingLeft,
    disabled,
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
    <Link href={href} className={linkClassName}>
      {icon}
      {children}
    </Link>
  );
}

export default BaseLink;
