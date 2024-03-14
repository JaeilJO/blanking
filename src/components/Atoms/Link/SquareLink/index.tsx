"use client";

import { useEffect, useRef } from "react";
import style from "./index.module.scss";

import classNames from "classnames/bind";

import Link from "next/link";
import SquareLinkProps from "./index.type";

const cn = classNames.bind(style);

function SquareLink(props: SquareLinkProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const {
    children,

    // 이 색상은 기본 검정 색상입니다.
    color = "#333333",

    fontSize = "body-01",

    size = 30,

    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    href,
  } = props;

  const linkClassName = cn(
    "link",
    fontSize,

    marginLeft,
    marginRight,
    marginTop,
    marginBottom
  );

  useEffect(() => {
    const $button = buttonRef.current;

    if (!$button) return;

    const handleMouseEnter = () => {
      $button.style.borderColor = color;
      $button.style.borderStyle = "solid";
      $button.style.borderWidth = "1px";
    };

    const handleMouseLeave = () => {
      //light-gray 기본컬러입니다.
      $button.style.borderColor = "#e2e2e2";
      $button.style.borderStyle = "solid";
      $button.style.borderWidth = "1px";
    };

    $button.addEventListener("mouseenter", handleMouseEnter);
    $button.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      $button.removeEventListener("mouseenter", handleMouseLeave);
      $button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [color]);

  return (
    <Link
      ref={buttonRef}
      href={href}
      style={{
        color,
        width: `${size}px`,
        height: `${size}px`,
      }}
      className={linkClassName}
    >
      {children}
    </Link>
  );
}

export default SquareLink;
