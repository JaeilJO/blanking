"use client";

// Utils
import Link from "next/link";
import classNames from "classnames/bind";

// Style
import style from "./index.module.scss";

// Types
import type { UrlObject } from "url";

interface SidebarTitleButtonProps {
  title: string;
  icon: React.ReactNode;
  href: string | UrlObject;
  fontSize: "body-01" | "body-02";
}

const cn = classNames.bind(style);

function SidebarTitleButton({
  href,
  title,
  icon,
  fontSize,
}: SidebarTitleButtonProps) {
  return (
    <Link
      href={href}
      className={cn("button", {
        "body-01": fontSize === "body-01",
        "body-02": fontSize === "body-02",
      })}
    >
      <span
        className={cn("icon", {
          "body-01": fontSize === "body-01",
          "body-02": fontSize === "body-02",
        })}
      >
        {icon}
      </span>
      <span className={style["title"]}>{title}</span>
    </Link>
  );
}

export default SidebarTitleButton;
