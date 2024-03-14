import {
  FontWeight,
  MarginTop,
  MarginBottom,
  MarginLeft,
  MarginRight,
} from "@/style/style.type";
import { HTMLAttributes } from "react";

/**
 * TextSubtitle 컴포넌트의 속성들입니다.
 */
export default interface TextSubtitleProps
  extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * 서브타이틀의 텍스트 정렬 방식입니다.
   */
  textAlign?: "text-left" | "text-center" | "text-right";

  /**
   * 서브타이틀의 폰트 크기입니다.
   */
  fontSize?: "sub-01" | "sub-02";

  /**
   * 서브타이틀의 폰트 두께입니다.
   */
  fontWeight?: FontWeight;

  /**
   * 서브타이틀의 색상입니다.
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
   * 서브타이틀의 상단 여백입니다.
   */
  marginTop?: MarginTop;

  /**
   * 서브타이틀의 하단 여백입니다.
   */
  marginBottom?: MarginBottom;

  /**
   * 서브타이틀의 왼쪽 여백입니다.
   */
  marginLeft?: MarginLeft;

  /**
   * 서브타이틀의 오른쪽 여백입니다.
   */
  marginRight?: MarginRight;

  /**
   * 서브타이틀의 표시 방식입니다.
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

  /**
   * 지정한 스타일외에 원하는 추가 스타일이 있다면 사용
   * 위의 스타일과 겹칠 경우 추가 스타일이 우선시 됩니다.
   */
  style?: React.CSSProperties;
}
