import {
  FontSize,
  FontWeight,
  MarginBottom,
  MarginTop,
  MarginLeft,
  MarginRight,
} from "@/style/style.type";
import { UrlObject } from "url";

/**
 * SolidLink 컴포넌트의 속성들입니다.
 */
export default interface SolidLinkProps {
  /**
   * 링크의 테마입니다.
   */
  theme:
    | "primary"
    | "black"
    | "gray"
    | "light-gray"
    | "red"
    | "yellow"
    | "green"
    | "white";

  /**
   * 링크의 표시 스타일입니다.
   */
  display?: "block" | "inline";

  /**
   * 링크 내부에 표시될 아이콘입니다.
   */
  icon?: React.ReactNode;

  /**
   * 링크 텍스트의 글꼴 크기입니다.
   */
  fontSize?: FontSize;

  /**
   * 링크 텍스트의 글꼴 두께입니다.
   */
  fontWeight?: FontWeight;

  /**
   * 링크의 텍스트 정렬 방식입니다.
   */
  textAlign?: "text-left" | "text-center" | "text-right";

  /**
   * 링크의 아래 여백입니다.
   */
  marginBottom?: MarginBottom;

  /**
   * 링크의 위 여백입니다.
   */
  marginTop?: MarginTop;

  /**
   * 링크의 왼쪽 여백입니다.
   */
  marginLeft?: MarginLeft;

  /**
   * 링크의 오른쪽 여백입니다.
   */
  marginRight?: MarginRight;

  /**
   * 링크가 비활성화 상태인지 여부입니다.
   */
  disabled?: boolean;

  /**
   * 링크의 텍스트 내용입니다.
   */
  children: string;

  /**
   * 링크의 URL입니다.
   */
  href: string | UrlObject;
}
