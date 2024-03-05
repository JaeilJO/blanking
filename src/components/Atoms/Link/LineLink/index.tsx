import { FontSize, FontWeight } from "@/style/style.type";
import classNames from "classnames/bind";
import { HTMLAttributes } from "react";
import style from "./index.module.scss";
import { UrlObject } from "url";
import Link from "next/link";

interface LineLinkProps {
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
  borderWidth?: "border-thin" | "border-medium" | "border-thick";
  children: string;
  fontSize: FontSize;
  fontWeight?: FontWeight;
  textAlign?: "text-left" | "text-center" | "text-right";
  href: string | UrlObject;
}

const cn = classNames.bind(style);

function LineLink({
  theme,
  display = "block",
  fontSize,
  fontWeight = "font-light",
  textAlign,
  icon,
  children,
  borderWidth = "border-thin",
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
        borderWidth
      )}
      href={href}
    >
      {icon}
      <div className={style["button-text"]}>{children}</div>
    </Link>
  );
}

export default LineLink;
