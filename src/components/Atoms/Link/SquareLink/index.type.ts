import {
  FontSize,
  MarginLeft,
  MarginRight,
  MarginTop,
  MarginBottom,
} from "@/style/style.type";
import { ReactNode } from "react";
import { UrlObject } from "url";

export default interface SquareLinkProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode | string;

  color: string;

  fontSize?: FontSize;

  size: number;

  marginLeft?: MarginLeft;
  marginRight?: MarginRight;
  marginTop?: MarginTop;
  marginBottom?: MarginBottom;

  href: string | UrlObject;
}
