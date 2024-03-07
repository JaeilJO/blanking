import {
  Gap,
  MarginBottom,
  MarginLeft,
  MarginRight,
  MarginTop,
  PaddingBottom,
  PaddingLeft,
  PaddingRight,
  PaddingTop,
} from "@/style/style.type";

/**
 * ColoumForm 컴포넌트의 속성들입니다.
 */
export default interface ColumnFormProps
  extends React.HTMLAttributes<HTMLFormElement> {
  /**
   * 폼 내 컬럼들 사이의 간격입니다.
   */
  gap?: Gap;
  /**
   * 폼의 표시 모드입니다.
   */
  display?: "block" | "inline";
  /**
   * 폼 아이템들의 수평 정렬 방식입니다.
   */
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";

  /**
   * 폼 아이템들의 수직 정렬 방식입니다.
   */
  alignItems?: "stretch" | "center" | "flex-start" | "flex-end" | "baseline";

  /**
   * 폼의 margin 속성입니다.
   */
  marginBottom?: MarginBottom;
  marginTop?: MarginTop;
  marginLeft?: MarginLeft;
  marginRight?: MarginRight;

  /**
   * 폼의 padding 속성입니다.
   */
  paddingBottom?: PaddingBottom;
  paddingTop?: PaddingTop;
  paddingLeft?: PaddingLeft;
  paddingRight?: PaddingRight;
}
