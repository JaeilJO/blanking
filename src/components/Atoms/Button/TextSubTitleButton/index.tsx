import Link from "next/link";

import ButtonCommonTypes from "../Common/common.type";
import style from "./index.module.scss";
import classNames from "classnames/bind";
import { TextSubTitleProps } from "../../Text/TextSubTitle/index.type";

type TextSubTitleButtonProps = Omit<
  ButtonCommonTypes,
  "square" | "squareSize" | "theme" | "block"
> &
  Omit<TextSubTitleProps, "noDrag">;

const cn = classNames.bind(style);

function TextSubTitleButton({
  children,
  type,
  disabled,
  href,
  theme,
  block,
  level,
  weight,
  textAlign,
}: TextSubTitleButtonProps) {
  const textButtonClassName = cn(
    "text-button",
    `sub-${level}`,
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

export default TextSubTitleButton;
