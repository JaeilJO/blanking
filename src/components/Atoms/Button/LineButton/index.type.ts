import {
  FontSize,
  FontWeight,
  MarginTop,
  MarginRight,
  MarginBottom,
  MarginLeft,
} from "@/style/style.type";
import React, { HTMLAttributes } from "react";

export interface LineButtonProps extends HTMLAttributes<HTMLButtonElement> {
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
   * 버튼에 표시될 아이콘입니다.
   */
  icon?: React.ReactNode;
  /**
   * 버튼의 테두리 너비입니다.
   */
  borderWidth?: "border-thin" | "border-medium" | "border-thick";
  /**
   * 버튼의 텍스트 내용입니다.
   */
  children: string;
  /**
   * 버튼 텍스트의 글꼴 크기입니다.
   */
  fontSize?: FontSize;
  /**
   * 버튼 텍스트의 글꼴 두께입니다.
   */
  fontWeight?: FontWeight;
  /**
   * 버튼의 텍스트 정렬입니다.
   */
  textAlign?: "text-left" | "text-center" | "text-right";
  /**
   * 버튼의 위쪽 여백입니다.
   */
  marginTop?: MarginTop;
  /**
   * 버튼의 오른쪽 여백입니다.
   */
  marginRight?: MarginRight;
  /**
   * 버튼의 아래쪽 여백입니다.
   */
  marginBottom?: MarginBottom;
  /**
   * 버튼의 왼쪽 여백입니다.
   */
  marginLeft?: MarginLeft;
}

export default LineButtonProps;
