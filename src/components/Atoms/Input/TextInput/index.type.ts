import {
  FontSize,
  MarginRight,
  MarginLeft,
  MarginTop,
  MarginBottom,
  PaddingRight,
  PaddingLeft,
  PaddingTop,
  PaddingBottom,
  FontWeight,
} from "@/style/style.type";

/**
 * TextInput 컴포넌트의 속성들입니다.
 */
export default interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * 입력 필드의 유형입니다.
   */
  type?: "text" | "email";
  /**
   * 입력 필드의 표시 스타일입니다.
   */
  display?: "inline" | "block";
  /**
   * 입력 필드의 플레이스홀더 텍스트입니다.
   */
  placeholder?: string;
  /**
   * 입력 필드의 글꼴 크기입니다.
   */
  fontSize?: FontSize;

  /**
   * 입력 필드의 글꼴 두께입니다.
   */
  fontWeight?: FontWeight;
  /**
   * 입력 필드의 테두리 너비입니다.
   */
  borderWidth?: "border-thin" | "border-thick" | "border-medium";
  /**
   * 입력 필드의 테마입니다.
   */
  theme?:
    | "primary"
    | "gray"
    | "light-gray"
    | "red"
    | "green"
    | "yellow"
    | "black"
    | "white";
  /**
   * 입력 필드의 오른쪽 여백입니다.
   */
  marginRight?: MarginRight;
  /**
   * 입력 필드의 왼쪽 여백입니다.
   */
  marginLeft?: MarginLeft;
  /**
   * 입력 필드의 위쪽 여백입니다.
   */
  marginTop?: MarginTop;
  /**
   * 입력 필드의 아래쪽 여백입니다.
   */
  marginBottom?: MarginBottom;
  /**
   * 입력 필드의 오른쪽 패딩입니다.
   */
  paddingRight?: PaddingRight;
  /**
   * 입력 필드의 왼쪽 패딩입니다.
   */
  paddingLeft?: PaddingLeft;
  /**
   * 입력 필드의 위쪽 패딩입니다.
   */
  paddingTop?: PaddingTop;
  /**
   * 입력 필드의 아래쪽 패딩입니다.
   */
  paddingBottom?: PaddingBottom;

  /**
   * 입력 필드의 비활성화 여부입니다.
   */
  disabled?: boolean;
}
