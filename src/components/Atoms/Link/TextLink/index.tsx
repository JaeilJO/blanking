import classNames from "classnames/bind";
import style from "./index.module.scss";
import { FontSize, FontWeight } from "@/style/style.type";
import { HTMLAttributes } from "react";
import Link from "next/link";
import { UrlObject } from "url";

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
  fontSize,
  fontWeight,
  textAlign = "text-center",
  href,
}: SolidLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "link",

        theme,
        display,
        fontSize,
        fontWeight,
        textAlign
      )}
    >
      {children}
    </Link>
  );
}

export default SolidLink;
