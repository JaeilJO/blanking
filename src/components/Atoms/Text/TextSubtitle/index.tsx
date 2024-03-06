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
  color,
  ...props
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
        display
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export default TextSubtitle;
