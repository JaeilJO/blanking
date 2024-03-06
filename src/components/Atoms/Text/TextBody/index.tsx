import classNames from "classnames/bind";
import style from "./index.module.scss";
import TextBodyProps from "./index.type";

const cn = classNames.bind(style);

function TextBody({
  children,
  display = "block",
  textAlign = "text-left",
  fontSize = "body-01",
  fontWeight,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  color,
}: TextBodyProps) {
  return (
    <p
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
    >
      {children}
    </p>
  );
}

export default TextBody;
