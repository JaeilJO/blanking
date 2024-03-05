import classNames from "classnames/bind";
import style from "./index.module.scss";
import { FontSize, FontWeight } from "@/style/style.type";

import { UrlObject } from "url";
import Link from "next/link";

interface SolidLinkProps {
  theme:
    | "primary"
    | "black"
    | "gray"
    | "light-gray"
    | "red"
    | "yellow"
    | "green"
    | "white";
  display?: "block" | "inline";
  icon?: React.ReactNode;
  children: string;
  fontSize: FontSize;
  fontWeight?: FontWeight;
  textAlign?: "text-left" | "text-center" | "text-right";
  href: string | UrlObject;
}
const cn = classNames.bind(style);
function SolidLink({
  theme,
  display = "block",
  children,
  icon,
  fontSize,
  fontWeight,
  textAlign = "text-center",
  href,
}: SolidLinkProps) {
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
        textAlign
      )}
      href={href}
    >
      {icon}
      <div className={style["button-text"]}>{children}</div>
    </Link>
  );
}

export default SolidLink;
