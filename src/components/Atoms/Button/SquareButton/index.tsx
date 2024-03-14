"use client";

// Utils
import useButtonEventListeners from "./index.hook";
import classNames from "classnames/bind";

// Style
import style from "./index.module.scss";

// Type
import SquareButtonProps from "./index.type";

const cn = classNames.bind(style);

// 이 색상은 기본 검정 색상입니다.
const blackColor = "#333333";

function SquareButton(props: SquareButtonProps) {
  const {
    size = 30,

    fontSize = "body-01",

    color = blackColor,

    type = "button",

    marginLeft,
    marginRight,
    marginTop,
    marginBottom,

    ...otherProps
  } = props;

  const { buttonRef } = useButtonEventListeners({ color });

  const buttonClassName = cn(
    "button",

    fontSize,

    marginLeft,
    marginRight,
    marginTop,
    marginBottom
  );

  return (
    <button
      type={type}
      ref={buttonRef}
      style={{
        color,
        width: `${size}px`,
        height: `${size}px`,
        ...otherProps.style,
      }}
      className={buttonClassName}
      {...otherProps}
    >
      {otherProps.children}
    </button>
  );
}

export default SquareButton;
