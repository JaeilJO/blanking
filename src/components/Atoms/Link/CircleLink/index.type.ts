import {
  MarginTop,
  MarginRight,
  MarginBottom,
  MarginLeft,
} from "@/style/style.type";
import { UrlObject } from "url";
import { LinkColorTheme } from "../BaseLink";

export interface CircleLinkProps {
  href: string | UrlObject;

  /**
   * 링크의 크기입니다.
   */
  size: number;

  /**
   * 링크의 색상입니다.
   */
  theme: LinkColorTheme;
  /**
   * 링크의 위쪽 여백입니다.
   */
  marginTop?: MarginTop;

  /**
   * 링크의 오른쪽 여백입니다.
   */
  marginRight?: MarginRight;

  /**
   * 링크의 아래쪽 여백입니다.
   */
  marginBottom?: MarginBottom;

  /**
   * 링크의 왼쪽 여백입니다.
   */
  marginLeft?: MarginLeft;

  style?: React.CSSProperties;

  disabled?: boolean;
}
