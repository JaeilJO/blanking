"use client";

import classNames from "classnames/bind";
import style from "./index.module.scss";
import Link from "next/link";
import ButtonCommonTypes from "../Common/common.type";

const cn = classNames.bind(style);

function LineButton({
  children,
  block = true,
  square,
  squareSize,
  theme = "default",
  type = "button",
  href,
  ...props
}: ButtonCommonTypes<"box">) {
  const buttonClassName = cn("line-button", theme, square, {
    block,
    disabled: props.disabled,
  });

  // 정사각형 크기를 위한 인라인 스타일
  const squareStyle =
    square && squareSize
      ? { width: `${squareSize}px`, height: `${squareSize}px` }
      : {};

  // 정사각형을 만들고 싶은데 squareSize가 설정되지 않은 경우 에러를 발생시킨다.
  if (square && !squareSize) {
    throw Error("정사각형 버튼을 위해 squareSize가 필요합니다.");
  }

  // Link 타입인 경우
  if (type === "link" && href !== undefined) {
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

export default LineButton;
