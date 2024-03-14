import {
  FontWeight,
  MarginTop,
  MarginBottom,
  MarginLeft,
  MarginRight,
} from "@/style/style.type";
import { HTMLAttributes } from "react";

/**
 * TextBody 컴포넌트의 속성들입니다.
 */
export default interface TextBodyProps
  extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * 텍스트 정렬 방식입니다.
   */
  textAlign?: "text-left" | "text-center" | "text-right";

  /**
   * 폰트 크기입니다.
   */
  fontSize?: "body-01" | "body-02";

  /**
   * 폰트 두께입니다.
   */
  fontWeight?: FontWeight;

  /**
   * 텍스트 색상입니다.
   */
  color?:
    | "primary"
    | "gray"
    | "light-gray"
    | "red"
    | "green"
    | "yellow"
    | "black"
    | "white";

  /**
   * 위쪽 여백입니다.
   */
  marginTop?: MarginTop;

  /**
   * 아래쪽 여백입니다.
   */
  marginBottom?: MarginBottom;

  /**
   * 왼쪽 여백입니다.
   */
  marginLeft?: MarginLeft;

  /**
   * 오른쪽 여백입니다.
   */
  marginRight?: MarginRight;

  /**
   * 표시 유형입니다.
   */
  display?: "block" | "inline";

  /**
   * 텍스트 래핑 여부입니다.
   */
  wrap?: boolean;

  /**
   * 텍스트 오버플로우 여부입니다.
   */
  overflow?: boolean;
}
