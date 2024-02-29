import { UrlObject } from "url";

type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type">;

type BoxTheme = "transparent" | "default" | "primary" | "gray" | "warn";
type TextTheme = "default" | "primary" | "gray" | "warn";

interface LinkButtonProps extends ButtonProps {
  /**
   * 버튼 타입이 Link인 경우 href는 필수이다.
   */
  type: "link";
  href: string | UrlObject;
}

interface NormalButtonProps extends ButtonProps {
  type: "button" | "submit" | "reset";
  href: never;
}

interface CommonProps<T extends "box" | "text" = "box"> {
  block?: boolean;

  /**
   * 버튼 타입이 Box인 경우 square, squareSize를 사용할 수 있다.
   */
  square?: T extends "box" ? boolean : never;

  /**
   * square가 true인 경우 squareSize는 필수이다.
   */
  squareSize?: T extends "box" ? number : never;

  /**
   * 버튼 타입이 Box인 경우 transparent를 사용할 수 있지만 text인 경우 사용할 수 없다.
   */
  theme?: T extends "box" ? BoxTheme : TextTheme;

  disabled?: boolean;
}

type ButtonCommonTypes<T extends "box" | "text" = "box"> = CommonProps<T> &
  (LinkButtonProps | NormalButtonProps);

export default ButtonCommonTypes;
