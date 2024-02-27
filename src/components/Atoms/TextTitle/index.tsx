// Style
import classNames from "classnames/bind";
import style from "./index.module.scss";

interface TextTitleProps {
  children: React.ReactNode;
  weight?: "light" | "regular" | "bold";
  textAlign?: "left" | "center" | "right";
  display: "block" | "inline";
  level: "01" | "02" | "03";
  color: "default" | "primary" | "not-important" | "gray";
}

const cn = classNames.bind(style);

function TextTitle({
  children,
  weight = "regular",
  textAlign = "left",
  display = "block",
  level = "01",
  color = "default",
}: TextTitleProps) {
  // ClassName 설정

  const className = cn("title", `title-${level}`, {
    light: weight === "light",
    regular: weight === "regular",
    bold: weight === "bold",

    left: textAlign === "left",
    center: textAlign === "center",
    right: textAlign === "right",

    displayInline: display === "inline",

    "defulat-color": color === "default",
    "primary-color": color === "primary",
    "not-important-color": color === "not-important",
    "gray-color": color === "gray",
  });

  return <h1 className={className}>{children}</h1>;
}

export default TextTitle;
