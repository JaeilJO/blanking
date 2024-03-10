import BaseButton, { buttonColorTheme } from "../BaseButton";
import { BaseButtonProps } from "../BaseButton/index.type";

interface SquareButtonProps
  extends Omit<
    BaseButtonProps,
    | "backgroundColor"
    | "borderColor"
    | "textColor"
    | "paddingBottom"
    | "paddingLeft"
    | "paddingRight"
    | "paddingTop"
  > {
  //현재 버튼이 가지고 있는 고유 타입
  theme: buttonColorTheme;
  size: number;
  children: React.ReactNode;
}

function SquareButton(props: SquareButtonProps) {
  const {
    theme = "primary",
    display = "block",

    fontSize = "body-01",

    borderWidth = "border-thin",

    marginBottom,
    marginLeft,
    marginRight,
    marginTop,

    textAlign = "text-center",

    disabled,

    children,

    size = 16,
  } = props;
  return (
    <BaseButton
      style={{ width: `${size}px`, height: `${size}px` }}
      fontSize={fontSize}
      display={display}
      textAlign={textAlign}
      borderColor={`border-${theme}`}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
      borderWidth={borderWidth}
      disabled={disabled}
    >
      {children}
    </BaseButton>
  );
}

export default SquareButton;
