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

  const textTitleClassName = cn("title", `title-${level}`, {
    light: weight === "light",
    regular: weight === "regular",
    bold: weight === "bold",

    left: textAlign === "left",
    center: textAlign === "center",
    right: textAlign === "right",

    displayInline: display === "inline",

    "defulat-color": color === "default",
    "primary-color": color === "primary",
    "light-gray-color": color === "light-gray",
    "gray-color": color === "gray",

    "no-drag": noDrag,
  });

  return <h1 className={textTitleClassName}>{children}</h1>;
}

export default TextTitle;
