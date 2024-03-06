"use client";

import classNames from "classnames/bind";
import style from "./index.module.scss";
import AvatarProps from "./index.type";

const cn = classNames.bind(style);

function Avatar({
  name,
  size = "medium",
  fontSize,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  disabled,
  ...props
}: AvatarProps) {
  // size가 number이면 fontSize가 필수, fontSize가 있으면 size가 필수
  if (typeof size === "number" && !fontSize) {
    throw new Error("size가 number이면 fontSize가 필수입니다.");
  }

  if (fontSize && typeof size !== "number") {
    throw new Error("fontSize가 있으면 size가 number여야 합니다.");
  }

  const remSize = typeof size === "number" ? size / 10 : null;

  const avatarClass = cn(
    "avatar",
    fontSize,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,

    {
      small: size === "small",
      medium: size === "medium",
      large: size === "large",
    }
  );

  return (
    <button
      className={avatarClass}
      disabled={disabled}
      style={{ width: `${remSize}rem`, height: `${remSize}rem` }}
      {...props}
    >
      {name[0]}
    </button>
  );
}

export default Avatar;
