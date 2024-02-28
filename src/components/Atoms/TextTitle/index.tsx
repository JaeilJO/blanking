// Style
import classNames from "classnames/bind";
import style from "./index.module.scss";
import { TextTitleProps } from "./index.type";

const cn = classNames.bind(style);

function TextTitle({
  children,
  weight = "regular",
  textAlign = "left",
  display = "block",
  level = "01",
  color = "default",
  noDrag = false,
}: TextTitleProps) {
  // ClassName 설정

  const textTitleClassName = cn(
    "title",
    `title-${level}`,
    textAlign,
    display === "inline" && "displayInline",
    weight,
    `${color}-color`,
    { "no-drag": noDrag }
  );

  return <h1 className={textTitleClassName}>{children}</h1>;
}

export default TextTitle;
