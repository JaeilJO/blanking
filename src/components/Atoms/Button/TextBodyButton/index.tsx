import Link from "next/link";
import { TextBodyProps } from "../../Text/TextBody/index.type";

import ButtonCommonTypes from "../Common/common.type";
import style from "./index.module.scss";
import classNames from "classnames/bind";

type TextBodyButtonProps = Omit<
  ButtonCommonTypes<"box">,
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
