import { BaseButtonProps, buttonColorTheme } from "../BaseButton/index.type";
import BaseButton from "../BaseButton";

// 사용자가 지정하면 안되는 부분 지정
interface OutLineButtonProps
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
}

function OutLineButton(props: OutLineButtonProps) {
  const { theme = "primary", ...otherProps } = props;

  return (
    <BaseButton
      /**
       * 1:3 비율을 유지 하기 위해 padding을 지정 했습니다.
       */
      paddingBottom="pb-2"
      paddingTop="pt-2"
      paddingRight="pr-5"
      paddingLeft="pl-5"
      // Base Button값을 따라갑니다.
      display={otherProps.display}
      fontSize={otherProps.fontSize}
      textAlign={otherProps.textAlign}
      borderWidth={otherProps.borderWidth}
      marginBottom={otherProps.marginBottom}
      marginLeft={otherProps.marginLeft}
      marginRight={otherProps.marginRight}
      marginTop={otherProps.marginTop}
      disabled={otherProps.disabled}
      /**
       * theme 관련
       * white와 light-gray 인 경우 font color는 검정색이여야 보이니까 지정
       */
      borderColor={`border-${theme}`}
      textColor={
        theme === "white" || theme === "light-gray"
          ? `text-black`
          : `text-${theme}`
      }
      style={otherProps.style}
      {...otherProps}
    >
      {otherProps.icon}
      {otherProps.children}
    </BaseButton>
  );
}

export default OutLineButton;
