// Style
import classNames from "classnames/bind";
import style from "./index.module.scss";
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
  whiteSpace = false,
  style,
}: TextSubTitleProps) {
  // ClassName 설정
  const textSubTitleClassName = cn(
    "sub-title",
    `sub-title-${level}`,
    weight,
    textAlign,

    theme,
    { "no-drag": noDrag, block: block, "white-space": whiteSpace }
  );

  return (
    <h2 style={style} className={textSubTitleClassName}>
      {children}
    </h2>
  );
}

export default TextSubTitle;
