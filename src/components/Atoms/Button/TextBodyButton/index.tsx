import Link from "next/link";
import { TextBodyProps } from "../../Text/TextBody/index.type";

import ButtonCommonTypes from "../Common/common.type";
import style from "./index.module.scss";
import classNames from "classnames/bind";

type TextBodyButtonProps = Omit<
  ButtonCommonTypes,
  "square" | "squareSize" | "theme" | "block"
> &
  Omit<TextBodyProps, "noDrag">;

const cn = classNames.bind(style);

function TextBodyButton({
  children,
  type,
  disabled,
  href,
  theme,
  block,
  level,
  weight,
  textAlign,
}: TextBodyButtonProps) {
  const textButtonClassName = cn(
    "text-button",
    `body-${level}`,
    theme,
    level,
    weight,
    textAlign,
    {
      block: block,
      disabled: disabled,
    }
  );

  if (type === "link" && !href) {
    throw Error("Link 타입의 버튼은 href가 필요합니다.");
  }

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

export default TextBodyButton;
