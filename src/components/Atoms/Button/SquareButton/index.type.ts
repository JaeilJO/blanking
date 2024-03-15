import {
  FontSize,
  MarginLeft,
  MarginRight,
  MarginTop,
  MarginBottom,
} from "@/style/style.type";

export default interface SquareButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * 버튼의 타입입니다.
   */
  type?: "button" | "submit" | "reset";

  /**
   * 테마 색상입니다.
   * 다른 버튼과 다르게 색상을 사용자가 지정해서 사용할 수 있습니다.
   * Hex Code로 입력해줘야합니다.
   */
  color: string;

  /**
   * 버튼의 크기입니다.
   * 단위는 px입니다.
   */
  size: number;

  /**
   * 버튼에 표시될 아이콘 혹은 글자의 크기입니다.
   * 아이콘은 React Icon을 사용해줘야합니다.
   */
  fontSize?: FontSize;

  /**
   * 버튼의 왼쪽 여백입니다.
   */
  marginLeft?: MarginLeft;

  /**
   * 버튼의 오른쪽 여백입니다.
   */
  marginRight?: MarginRight;

  /**
   * 버튼의 위쪽 여백입니다.
   */
  marginTop?: MarginTop;

  /**
   * 버튼의 아래쪽 여백입니다.
   */
  marginBottom?: MarginBottom;

  /**
   * 버튼의 비활성화 상태입니다.
   */
  disabled?: boolean;
}
