import {
  FontSize,
  FontWeight,
  MarginBottom,
  MarginLeft,
  MarginRight,
  MarginTop,
} from "@/style/style.type";
import { HTMLAttributes } from "react";

/**
 * SolidButton 컴포넌트의 속성들입니다.
 */
export default interface SolidButtonProps
  extends HTMLAttributes<HTMLButtonElement> {
  /**
   * 버튼의 테마입니다.
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
   * 버튼의 표시 스타일입니다.
   */
  display?: "block" | "inline";

  /**
   * 버튼 내부에 표시될 아이콘입니다.
   */
  icon?: React.ReactNode;

  /**
   * 버튼 텍스트의 글꼴 크기입니다.
   */
  fontSize?: FontSize;

  /**
   * 버튼 텍스트의 글꼴 두께입니다.
   */
  fontWeight?: FontWeight;

  /**
   * 버튼의 텍스트 정렬 방식입니다.
   */
  textAlign?: "text-left" | "text-center" | "text-right";

  /**
   * 버튼의 아래 여백입니다.
   */
  marginBottom?: MarginBottom;

  /**
   * 버튼의 위 여백입니다.
   */
  marginTop?: MarginTop;

  /**
   * 버튼의 왼쪽 여백입니다.
   */
  marginLeft?: MarginLeft;

  /**
   * 버튼의 오른쪽 여백입니다.
   */
  marginRight?: MarginRight;

  /**
   * 버튼이 비활성화 상태인지 여부입니다.
   */
  disabled?: boolean;

  /**
   * 버튼의 텍스트 내용입니다.
   */
  children: string;

  type?: "button" | "submit" | "reset";
}
