// Utils
import Link from "next/link";
import classNames from "classnames/bind";

// Style
import style from "./index.module.scss";

// Types
import type { UrlObject } from "url";

interface SidebarAddButtonProps {
  title: string;
  icon: React.ReactNode;
  href: string | UrlObject;

  /**
   * React Icon만 넣어주세요.
   */
  fontSize: "body-01" | "body-02";
}

const cn = classNames.bind(style);

function SidebarAddButton({
  href,
  title,
  icon,
  fontSize,
}: SidebarAddButtonProps) {
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

export default SidebarAddButton;
