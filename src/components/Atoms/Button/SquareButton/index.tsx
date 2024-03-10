"use client";

import { ReactNode, useEffect, useRef } from "react";
import style from "./index.module.scss";
import {
  FontSize,
  MarginBottom,
  MarginLeft,
  MarginRight,
  MarginTop,
  PaddingBottom,
  PaddingLeft,
  PaddingRight,
  PaddingTop,
} from "@/style/style.type";
import classNames from "classnames/bind";

const cn = classNames.bind(style);

interface SquareButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode | string;
  color: string;

  fontSize?: FontSize;

  marginLeft?: MarginLeft;
  marginRight?: MarginRight;
  marginTop?: MarginTop;
  marginBottom?: MarginBottom;

  paddingLeft?: PaddingLeft;
  paddingRight?: PaddingRight;
  paddingTop?: PaddingTop;
  paddingBottom?: PaddingBottom;
}

function SquareButton({
  children,

  // 이 색상은 기본 검정 색상입니다.
  color = "#333333",

  fontSize = "body-01",

  paddingBottom = "pb-3",
  paddingLeft = "pl-3",
  paddingRight = "pr-3",
  paddingTop = "pt-3",

  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
}: SquareButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonClassName = cn(
    "button",
    fontSize,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
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
    <button
      ref={buttonRef}
      style={{
        color,
      }}
      className={buttonClassName}
    >
      {children}
    </button>
  );
}

export default SquareButton;
