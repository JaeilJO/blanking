import classNames from "classnames/bind";
import style from "./index.module.scss";
import TextSubtitleProps from "./index.type";

const cn = classNames.bind(style);

function TextSubtitle({
  children,
  display = "block",
  textAlign = "text-left",
  fontSize = "sub-01",
  fontWeight,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  wrap,
  overflow,
  color,
  style,
}: TextSubtitleProps) {
  return (
    <h2
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
        display,
        { wrap: wrap, "no-wrap": !wrap, overflow: overflow }
      )}
      style={style}
    >
      {children}
    </h2>
  );
}

export default TextSubtitle;
