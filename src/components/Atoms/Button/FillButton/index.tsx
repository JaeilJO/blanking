"use client";

import classNames from "classnames/bind";
import style from "./index.module.scss";
import Link from "next/link";

import ButtonCommonTypes from "../Common/common.type";

const cn = classNames.bind(style);

function FillButton({
  block = true,
  square,
  squareSize,
  theme = "default",
  type = "button",
  href,
  children,
  ...props
}: ButtonCommonTypes) {
  const buttonClassName = cn("fill-button", theme, square, {
    block: block,
    disabled: props.disabled,
  });

  // 정사각형 크기를 위한 인라인 스타일
  const squareStyle = square
    ? {
        width: `${squareSize}px`,
        height: `${squareSize}px`,
      }
    : {};

  // 정사각형이지만 크기가 정의되지 않은 경우 에러 발생
  if (square && !squareSize) {
    throw Error("정사각형 버튼을 위해 squareSize가 필요합니다.");
  }

  if (type === "link" && !href) {
    throw Error("Link 타입의 버튼은 href가 필요합니다.");
  }

  // Link 타입인 경우
  if (type === "link" && href) {
    return (
      <Link legacyBehavior href={href}>
        <a style={squareStyle} className={buttonClassName}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button
      type={type as "button" | "submit" | "reset"}
      style={squareStyle}
      className={buttonClassName}
      {...props}
    >
      {children}
    </button>
  );
}

export default FillButton;
