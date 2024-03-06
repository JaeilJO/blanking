import classNames from "classnames/bind";

import style from "./index.module.scss";
import LineLinkProps from "./index.type";
import Link from "next/link";

const cn = classNames.bind(style);

function LineLink({
  theme = "primary",
  display,
  fontSize = "body-01",
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
  href,
}: LineLinkProps) {
  return (
    <Link
      className={cn(
        "link",
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
        marginTop,

        { disabled: disabled }
      )}
      href={href}
    >
      {icon}
      {children}
    </Link>
  );
}

export default LineLink;
