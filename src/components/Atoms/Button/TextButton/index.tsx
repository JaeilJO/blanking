import classNames from "classnames/bind";
import style from "./index.module.scss";
import { FontSize, FontWeight } from "@/style/style.type";
import { HTMLAttributes } from "react";

interface SolidButtonProps extends HTMLAttributes<HTMLButtonElement> {
  theme:
    | "primary"
    | "black"
    | "gray"
    | "light-gray"
    | "red"
    | "yellow"
    | "green"
    | "white";
  display?: "block" | "inline";
  children: string;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  textAlign?: "text-left" | "text-center" | "text-right";
}
const cn = classNames.bind(style);
function SolidButton({
  theme,
  display,
  children,
  fontSize,
  fontWeight,
  textAlign = "text-center",
  ...props
}: SolidButtonProps) {
  return (
    <button
      className={cn("button", theme, display, fontSize, fontWeight, textAlign)}
      {...props}
    >
      {children}
    </button>
  );
}

export default SolidButton;
