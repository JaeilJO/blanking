import {
  FontSize,
  MarginLeft,
  MarginRight,
  MarginTop,
  MarginBottom,
} from "@/style/style.type";
import { HTMLAttributes } from "react";

/**
 * Avatar 컴포넌트의 속성을 나타냅니다.
 */
export default interface AvatarProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * 아바타에 들어갈 이름 입니다.
   */
  name: string;
  /**
   * 아바타의 크기입니다. "small", "medium", "large" 또는 숫자일 수 있습니다.
   * 숫자일 경우 width와 height가 같은 크기로 지정됩니다.
   * 숫자일 경우 fontSize가 필수입니다.
   * 숫자인 경우 size / 10이 rem 단위로 적용됩니다.
   */
  size: "small" | "medium" | "large" | number;
  /**
   * 아바타의 글꼴 크기입니다.
   * size가 number이면 필수입니다.
   */
  fontSize?: FontSize;
  /**
   * 아바타의 왼쪽 여백입니다.
   */
  marginLeft?: MarginLeft;
  /**
   * 아바타의 오른쪽 여백입니다.
   */
  marginRight?: MarginRight;
  /**
   * 아바타의 위쪽 여백입니다.
   */
  marginTop?: MarginTop;
  /**
   * 아바타의 아래쪽 여백입니다.
   */
  marginBottom?: MarginBottom;
  /**
   * 아바타가 비활성화되었는지 여부를 지정합니다.
   */
  disabled?: boolean;
}
