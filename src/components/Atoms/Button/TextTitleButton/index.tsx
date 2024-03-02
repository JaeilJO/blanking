import Link from "next/link";

import ButtonCommonTypes from "../Common/common.type";
import style from "./index.module.scss";
import classNames from "classnames/bind";

import { TextTitleProps } from "../../Text/TextTitle/index.type";

type TextTitleButtonProps = Omit<
  ButtonCommonTypes,
  "square" | "squareSize" | "theme" | "block"
> &
  Omit<TextTitleProps, "noDrag">;

const cn = classNames.bind(style);

function TextTitleButton({
  children,
  type,
  disabled,
  href,
  theme,
  block,
  level,
  weight,
  textAlign,
}: TextTitleButtonProps) {
  const textButtonClassName = cn(
    "text-button",
    `tit-${level}`,
    theme,
    level,
    weight,
    textAlign,
    {
      block: block,
      disabled: disabled,
    }
  );

  // Link 타입인 경우
  if (type === "link" && href) {
    return (
      <Link legacyBehavior href={href}>
        <a className={textButtonClassName}>{children}</a>
      </Link>
    );
  }
  return <button className={textButtonClassName}>{children}</button>;
}

export default TextTitleButton;
