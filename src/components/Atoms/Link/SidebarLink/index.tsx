"use client";

import classNames from "classnames/bind";
import Link from "next/link";

import style from "./index.module.scss";
import SidebarLinkProps from "./index.type";

const cn = classNames.bind(style);

function SidebarLink(props: SidebarLinkProps) {
  const {
    href,
    openIcon,
    closeIcon,
    isOpen,
    title,
    titleSize = "body-01",
    iconSize = "sub-01",
    fontWeight,

    paddingLeft = "pl-2",
    paddingRight = "pr-2",
    paddingBottom = "pb-2",
    paddingTop = "pt-2",

    marginLeft,
    marginRight,
    marginBottom,
    marginTop,
    alignContent,
  } = props;

  const linkClassName = cn(
    "link",
    titleSize,
    iconSize,
    fontWeight,
    paddingLeft,
    paddingRight,
    paddingBottom,
    paddingTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginTop,
    alignContent,
    { "is-open": isOpen }
  );

  const titleClassName = cn("title", titleSize);

  const iconClassName = cn("icon", iconSize);
  return (
    <Link href={href} className={linkClassName}>
      <span className={iconClassName}>{isOpen ? openIcon : closeIcon}</span>
      <span className={titleClassName}>{title}</span>
    </Link>
  );
}

export default SidebarLink;
