"use client";

import style from "./index.module.scss";

import classNames from "classnames/bind";

import Link from "next/link";
import SquareLinkProps from "./index.type";

import uselinkEventListeners from "./index.hook";

const cn = classNames.bind(style);

// 이 색상은 기본 검정 색상입니다.
const blackColor = "#333333";

function SquareLink(props: SquareLinkProps) {
  const {
    size = 30,

    color = blackColor,

    fontSize = "body-01",

    marginLeft,
    marginRight,
    marginTop,
    marginBottom,

    href,

    disabled,

    children,

    style,
  } = props;

  const linkClassName = cn(
    "link",

    fontSize,

    marginLeft,
    marginRight,
    marginTop,
    marginBottom,

    { disabled: disabled }
  );

  const { linkRef } = uselinkEventListeners({ color });

  return (
    <Link
      ref={linkRef}
      href={href}
      style={{
        color,
        width: `${size}px`,
        height: `${size}px`,
        ...style,
      }}
      className={linkClassName}
    >
      {children}
    </Link>
  );
}

export default SquareLink;
