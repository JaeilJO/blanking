// Style
import classNames from "classnames/bind";
import style from "./index.module.scss";
import { TextTitleProps } from "./index.type";

const cn = classNames.bind(style);

function TextTitle({
  children,
  weight = "regular",
  textAlign = "left",
  block = true,
  level = "01",
  theme = "default",
  noDrag = false,
}: TextTitleProps) {
  // ClassName 설정

  const textTitleClassName = cn(
    "title",
    `title-${level}`,
    textAlign,
    weight,
    theme,
    { "no-drag": noDrag, block: block }
  );

  return <h1 className={textTitleClassName}>{children}</h1>;
}

export default TextTitle;
