import { FontSize, FontWeight } from "@/style/style.type";
import classNames from "classnames/bind";
import { HTMLAttributes } from "react";
import style from "./index.module.scss";

interface TextBodyProps extends HTMLAttributes<HTMLParagraphElement> {
  textAlign: "text-left" | "text-center" | "text-right";
  fontSize?: "body-01" | "body-02";
  fontWeight?: FontWeight;
}

const cn = classNames.bind(style);

function TextBody({
  children,
  textAlign = "text-left",
  fontSize = "body-01",
  fontWeight,
}: TextBodyProps) {
  return (
    <p className={cn("paragraph", fontSize, textAlign, fontWeight)}>
      {children}
    </p>
  );
}

export default TextBody;
