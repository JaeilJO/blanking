import {
  Gap,
  MarginBottom,
  MarginTop,
  MarginLeft,
  MarginRight,
  PaddingBottom,
  PaddingTop,
  PaddingLeft,
  PaddingRight,
} from "@/style/style.type";

/**
 * RowForm 컴포넌트의 속성들입니다.
 */
export default interface RowFormProps
  extends React.HTMLAttributes<HTMLFormElement> {
  /**
   * 폼 요소들 사이의 간격입니다.
   */
  gap: Gap;

  /**
   * 폼의 표시 모드입니다.
   */
  display?: "block" | "inline";

  /**
   * 폼 요소들의 수평 정렬 방식입니다.
   */
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";

  /**
   * 폼 요소들의 수직 정렬 방식입니다.
   */
  alignItems?: "stretch" | "center" | "flex-start" | "flex-end" | "baseline";

  /**
   * 폼의 아래쪽 여백입니다.
   */
  marginBottom?: MarginBottom;

  /**
   * 폼의 위쪽 여백입니다.
   */
  marginTop?: MarginTop;

  /**
   * 폼의 왼쪽 여백입니다.
   */
  marginLeft?: MarginLeft;

  /**
   * 폼의 오른쪽 여백입니다.
   */
  marginRight?: MarginRight;

  /**
   * 폼의 아래쪽 패딩입니다.
   */
  paddingBottom?: PaddingBottom;

  /**
   * 폼의 위쪽 패딩입니다.
   */
  paddingTop?: PaddingTop;

  /**
   * 폼의 왼쪽 패딩입니다.
   */
  paddingLeft?: PaddingLeft;

  /**
   * 폼의 오른쪽 패딩입니다.
   */
  paddingRight?: PaddingRight;
}
