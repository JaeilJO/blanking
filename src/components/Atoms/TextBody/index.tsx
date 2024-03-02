// Style
import style from "./index.module.scss";
import classNames from "classnames/bind";
import { TextSubTitleProps } from "./index.type";

const cn = classNames.bind(style);

function TextSubTitle({
  children,
  weight = "regular",
  textAlign = "left",
  display = "block",
  level = "01",
  color = "default",
  noDrag = false,
}: TextSubTitleProps) {
  // ClassName 설정
  const className = cn(
    "body",
    `body-${level}`,
    weight,
    textAlign,
    display === "inline" && "displayInline",
    `${color}-color`,
    { "no-drag": noDrag }
  );

  return <div className={className}>{children}</div>;
}

export default TextSubTitle;
