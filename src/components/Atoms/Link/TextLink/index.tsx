import classNames from "classnames/bind";
import style from "./index.module.scss";

import TextLinkProps from "./index.type";
import Link from "next/link";

const cn = classNames.bind(style);

function TextLink({
  theme = "primary",
  display = "block",
  children,
  fontSize = "body-01",
  fontWeight = "font-light",
  textAlign = "text-center",
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  disabled,
  href,
}: TextLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "link",
        theme,
        display,
        fontSize,
        fontWeight,
        textAlign,
        marginBottom,
        marginLeft,
        marginRight,
        marginTop,
        { disabled: disabled }
      )}
    >
      {children}
    </Link>
  );
}

export default TextLink;
