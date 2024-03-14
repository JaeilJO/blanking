import {
  PaddingTop,
  PaddingBottom,
  PaddingLeft,
  PaddingRight,
  MarginBottom,
  MarginTop,
  Gap,
  MarginRight,
  MarginLeft,
} from "@/style/style.type";

/**
 * ColumnFlexBox 컴포넌트의 속성들입니다.
 */
export default interface ColumnFlexBoxProps {
  /**
   * ColumnFlexBox의 내용입니다.
   */
  children: React.ReactNode;

  /**
   * ColumnFlexBox의 display 속성입니다.
   */
  display?: "block" | "inline";

  /**
   * ColumnFlexBox의 flex-wrap 속성입니다.
   */
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";

  /**
   * ColumnFlexBox의 justify-content 속성입니다.
   */
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";

  /**
   * ColumnFlexBox의 align-items 속성입니다.
   */
  alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";

  /**
   * ColumnFlexBox의 배경색입니다.
   */
  backgroundColor?:
    | "black"
    | "primary"
    | "gray"
    | "white"
    | "none"
    | "light-gray"
    | "green"
    | "red"
    | "yellow";

  /**
   * ColumnFlexBox에 border-radius를 적용할지 여부입니다.
   */
  borderRadius?: boolean;

  /**
   * ColumnFlexBox의 padding-top 속성입니다.
   */
  paddingTop?: PaddingTop;

  /**
   * ColumnFlexBox의 padding-bottom 속성입니다.
   */
  paddingBottom?: PaddingBottom;

  /**
   * ColumnFlexBox의 padding-left 속성입니다.
   */
  paddingLeft?: PaddingLeft;

  /**
   * ColumnFlexBox의 padding-right 속성입니다.
   */
  paddingRight?: PaddingRight;

  /**
   * ColumnFlexBox의 margin-bottom 속성입니다.
   */
  marginLeft?: MarginLeft;

  /**
   * ColumnFlexBox의 margin-right 속성입니다.
   */
  marginRight?: MarginRight;

  /**
   * ColumnFlexBox의 margin-bottom 속성입니다.
   */
  marginBottom?: MarginBottom;

  /**
   * ColumnFlexBox의 margin-top 속성입니다.
   */
  marginTop?: MarginTop;

  /**
   * ColumnFlexBox의 자식 요소 사이의 간격입니다.
   */
  gap?: Gap;

  style?: React.CSSProperties;
}
