// Style
import classNames from "classnames/bind";
import style from "./index.module.scss";

interface TextSubTitleProps {
  children: React.ReactNode;
  weight?: "light" | "regular";
  textAlign?: "left" | "center" | "right";
  display: "block" | "inline";
  level: "01" | "02";
  color: "default" | "primary" | "not-important" | "gray";
}

const cn = classNames.bind(style);

function TextSubTitle({
  children,
  weight = "regular",
  textAlign = "left",
  display = "block",
  level = "01",
  color = "default",
}: TextSubTitleProps) {
  // ClassName 설정
  const className = cn("body", `body-${level}`, {
    light: weight === "light",
    regular: weight === "regular",

    left: textAlign === "left",
    center: textAlign === "center",
    right: textAlign === "right",

    displayInline: display === "inline",

    "defulat-color": color === "default",
    "primary-color": color === "primary",
    "not-important-color": color === "not-important",
    "gray-color": color === "gray",
  });

  return <div className={className}>{children}</div>;
}

export default TextSubTitle;
