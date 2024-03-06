import classNames from "classnames/bind";
import style from "./index.module.scss";

import SolidLinkProps from "./index.type";
import Link from "next/link";

const cn = classNames.bind(style);
function SolidLink({
  theme = "primary",
  display = "block",
  children,
  icon,
  fontSize = "body-01",
  fontWeight = "font-light",
  textAlign = "text-center",
  marginBottom,
  marginTop,
  marginLeft,
  marginRight,
  disabled,
  href,
}: SolidLinkProps) {
  return (
    <Link
      href={href}
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
        marginBottom,
        marginLeft,
        marginTop,
        marginRight,
        { disabled: disabled }
      )}
    >
      {icon}
      {children}
    </Link>
  );
}

export default SolidLink;
