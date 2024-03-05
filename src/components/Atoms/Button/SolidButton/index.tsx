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
  icon?: React.ReactNode;
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
  icon,
  fontSize,
  fontWeight,
  textAlign = "text-center",
  ...props
}: SolidButtonProps) {
  return (
    <button
      className={cn(
        "button",
        theme,
        "pr-3",
        "pl-3",
        "pt-2",
        "pb-2",
        display,
        fontSize,
        fontWeight,
        textAlign
      )}
      {...props}
    >
      {icon}
      <div className={style["button-text"]}>{children}</div>
    </button>
  );
}

export default SolidButton;
