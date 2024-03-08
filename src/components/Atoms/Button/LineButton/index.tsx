import { BaseButtonProps } from "../BaseButton/index.type";
import BaseButton, { buttonColorTheme } from "../BaseButton";

// 사용자가 지정하면 안되는 부분 지정
interface LineButtonProps
  extends Omit<
    BaseButtonProps,
    | "backgroundColor"
    | "borderColor"
    | "fontColor"
    | "paddingBottom"
    | "paddingLeft"
    | "paddingRight"
    | "paddingTop"
  > {
  //현재 버튼이 가지고 있는 고유 타입
  theme: buttonColorTheme;
}

function LineButton(props: LineButtonProps) {
  const {
    theme = "primary",
    display = "block",

    fontSize = "body-01",

    borderWidth = "border-thin",

    marginBottom,
    marginLeft,
    marginRight,
    marginTop,

    icon,

    children,

    ...otherProps
  } = props;

  return (
    <BaseButton
      //기본 패딩
      paddingBottom="pb-3"
      paddingTop="pt-3"
      paddingRight="pr-4"
      paddingLeft="pl-4"
      // 사용자가 지정할 수 있는 것 (props로 받아옴)
      fontSize={fontSize}
      display={display}
      borderColor={`border-${theme}`}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
      // white인 경우 font color는 검정색이여야 보이니까 지정
      fontColor={theme === "white" ? `text-black` : `text-${theme}`}
      borderWidth={borderWidth}
      {...otherProps}
    >
      {icon}
      {children}
    </BaseButton>
  );
}

export default LineButton;
