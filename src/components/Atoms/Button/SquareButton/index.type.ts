import {
  FontSize,
  MarginLeft,
  MarginRight,
  MarginTop,
  MarginBottom,
} from "@/style/style.type";
import { ReactNode } from "react";

export default interface SquareButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode | string;

  color: string;
  size: number;

  fontSize?: FontSize;

  marginLeft?: MarginLeft;
  marginRight?: MarginRight;
  marginTop?: MarginTop;
  marginBottom?: MarginBottom;
}
