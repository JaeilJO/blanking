import { UrlObject } from "url";

/**
 * HTML Button Element에서 type속성만 제외
 * - type 속성을 Custom하게 사용할 것이기 때문에 제외
 */
type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type">;
interface LinkButtonProps extends ButtonProps {
  /**
   * 버튼 타입이 Link인 경우 href는 필수
   */
  type: "link";
  href: string | UrlObject;
}

interface NormalButtonProps extends ButtonProps {
  type: "button" | "submit" | "reset";
  href: never;
}
// 공통 Props
interface CommonProps extends ButtonProps {
  block?: boolean;
  square?: boolean;
  squareSize?: number;

  theme?: "default" | "primary" | "gray" | "warn" | "transparent";
}

export type LineButtonProps = CommonProps &
  (LinkButtonProps | NormalButtonProps);
