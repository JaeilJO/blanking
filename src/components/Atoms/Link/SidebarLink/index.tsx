"use client";

import classNames from "classnames/bind";
import Link from "next/link";

import style from "./index.module.scss";
import SidebarLinkProps from "./index.type";
import FlexBox from "../../FlexBox";
import SquareLink from "../SquareLink";
import { LuTrash } from "react-icons/lu";
import { UrlObject } from "url";

const cn = classNames.bind(style);

function SidebarLink(props: SidebarLinkProps) {
  const {
    href,
    openIcon,
    closeIcon,
    isOpen,
    groupname,
    pagename,
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

  const deleteHref = groupname
    ? {
        href: "/user/deletegroup",
        query: {
          groupname: groupname,
        },
      }
    : {
        pathname: "/user/deletepage",
        query: { groupname: groupname, pagename: pagename },
      };

  return (
    <Link href={href} className={linkClassName}>
      <div className={style["contents"]}>
        <span className={iconClassName}>{isOpen ? openIcon : closeIcon}</span>
        <span className={titleClassName}>
          {groupname ?? (groupname || pagename)}
        </span>
      </div>

      <div className={style["options"]}>
        <SquareLink href={deleteHref} color="#333333" size={30}>
          <LuTrash />
        </SquareLink>
      </div>
    </Link>
  );
}

export default SidebarLink;
