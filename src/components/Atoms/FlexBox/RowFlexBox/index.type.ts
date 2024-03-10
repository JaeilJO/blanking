import {
  PaddingTop,
  PaddingBottom,
  PaddingLeft,
  PaddingRight,
  MarginBottom,
  MarginTop,
  Gap,
} from "@/style/style.type";

/**
 * RowFlexBox 컴포넌트의 속성들입니다.
 */
export default interface RowFlexBoxProps {
  /**
   * RowFlexBox의 내용입니다.
   */
  children: React.ReactNode;

  /**
   * RowFlexBox의 display 속성입니다.
   */
  display?: "flex" | "inline-flex";

  /**
   * RowFlexBox의 flex-wrap 속성입니다.
   */
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";

  /**
   * RowFlexBox의 justify-content 속성입니다.
   */
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";

  /**
   * RowFlexBox의 align-items 속성입니다.
   */
  alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";

  /**
   * RowFlexBox의 배경색입니다.
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
   * RowFlexBox에 border-radius를 적용할지 여부입니다.
   */
  borderRadius?: boolean;

  /**
   * RowFlexBox의 padding-top 속성입니다.
   */
  paddingTop?: PaddingTop;

  /**
   * RowFlexBox의 padding-bottom 속성입니다.
   */
  paddingBottom?: PaddingBottom;

  /**
   * RowFlexBox의 padding-left 속성입니다.
   */
  paddingLeft?: PaddingLeft;

  /**
   * RowFlexBox의 padding-right 속성입니다.
   */
  paddingRight?: PaddingRight;

  /**
   * RowFlexBox의 margin-bottom 속성입니다.
   */
  marginLeft?: PaddingLeft;

  /**
   * RowFlexBox의 margin-right 속성입니다.
   */
  marginRight?: PaddingRight;

  /**
   * RowFlexBox의 margin-bottom 속성입니다.
   */
  marginBottom?: MarginBottom;

  /**
   * RowFlexBox의 margin-top 속성입니다.
   */
  marginTop?: MarginTop;

  /**
   * RowFlexBox의 자식 요소 사이의 간격입니다.
   */
  gap?: Gap;
}
