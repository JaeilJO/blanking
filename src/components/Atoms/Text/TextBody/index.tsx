// Style
import style from "./index.module.scss";
import classNames from "classnames/bind";
import { TextSubTitleProps } from "./index.type";

const cn = classNames.bind(style);

function TextSubTitle({
  children,
  weight = "regular",
  textAlign = "left",
  block = true,
  level = "01",
  theme = "default",
  noDrag = false,
}: TextSubTitleProps) {
  // ClassName 설정
  const className = cn("body", `body-${level}`, weight, textAlign, theme, {
    "no-drag": noDrag,
    block: block,
  });

  return <div className={className}>{children}</div>;
}

export default TextSubTitle;
