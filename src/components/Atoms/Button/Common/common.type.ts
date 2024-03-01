import { UrlObject } from "url";

type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type">;

type BoxTheme = "transparent" | "default" | "primary" | "gray" | "warn";

interface ButtonCommonTypes extends ButtonProps {
  block?: boolean;

  type: "button" | "submit" | "reset" | "link";

  href?: string | UrlObject;

  /**
   * 버튼 타입이 Box인 경우 square, squareSize를 사용할 수 있다.
   */
  square?: boolean;

  /**
   * square가 true인 경우 squareSize는 필수이다.
   */
  squareSize?: number;

  /**
   * 버튼 타입이 Box인 경우 transparent를 사용할 수 있지만 text인 경우 사용할 수 없다.
   */
  theme?: BoxTheme;

  disabled?: boolean;
}

export default ButtonCommonTypes;
