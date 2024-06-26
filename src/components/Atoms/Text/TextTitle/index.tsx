import classNames from "classnames/bind";

import style from "./index.module.scss";
import TextTitleProps from "./index.type";

const cn = classNames.bind(style);

function TextTitle({
  children,
  display = "block",
  textAlign = "text-left",
  fontSize = "tit-01",
  fontWeight,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  wrap,
  overflow,
  color,
  style,
}: TextTitleProps) {
  return (
    <h1
      className={cn(
        "paragraph",
        fontSize,
        textAlign,
        fontWeight,
        color,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        display
      )}
      style={style}
    >
      {children}
    </h1>
  );
}

export default TextTitle;
