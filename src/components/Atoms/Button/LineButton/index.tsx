import { FontSize, FontWeight } from "@/style/style.type";
import classNames from "classnames/bind";
import { HTMLAttributes } from "react";
import style from "./index.module.scss";

interface LineButtonProps extends HTMLAttributes<HTMLButtonElement> {
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
  borderWidth?: "border-thin" | "border-medium" | "border-thick";
  children: string;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  textAlign?: "text-left" | "text-center" | "text-right";
}

const cn = classNames.bind(style);

function LinkButton({
  theme,
  display,
  fontSize,
  fontWeight = "font-light",
  textAlign,
  icon,
  children,
  borderWidth,
  ...props
}: LineButtonProps) {
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
        textAlign,
        borderWidth
      )}
      {...props}
    >
      {icon}
      <div className={style["button-text"]}>{children}</div>
    </button>
  );
}

export default LinkButton;
