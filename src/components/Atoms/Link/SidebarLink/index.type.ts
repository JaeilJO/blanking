import {
  FontSize,
  FontWeight,
  PaddingLeft,
  PaddingRight,
  PaddingBottom,
  PaddingTop,
  MarginLeft,
  MarginRight,
  MarginBottom,
  MarginTop,
} from "@/style/style.type";
import { UrlObject } from "url";

export default interface SidebarItemProps {
  href: string | UrlObject;

  /**
   * 둘 다 있거나 둘다 없어야 합니다.
   */
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;

  isOpen?: boolean;

  groupname?: string;
  pagename?: string;

  titleSize?: FontSize;
  iconSize?: FontSize;

  fontWeight?: FontWeight;

  alignContent?: "left" | "center" | "right";

  paddingLeft?: PaddingLeft;
  paddingRight?: PaddingRight;
  paddingBottom?: PaddingBottom;
  paddingTop?: PaddingTop;

  marginLeft?: MarginLeft;
  marginRight?: MarginRight;
  marginBottom?: MarginBottom;
  marginTop?: MarginTop;
}
