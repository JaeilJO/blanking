import BaseButton from "../BaseButton";
import { BaseButtonProps, buttonColorTheme } from "../BaseButton/index.type";

// 사용자가 지정하면 안되는 부분 지정
interface FilledButtonProps
  extends Omit<
    BaseButtonProps,
    | "backgroundColor"
    | "borderColor"
    | "textColor"
    | "paddingBottom"
    | "paddingLeft"
    | "paddingRight"
    | "paddingTop"
    | "borderWidth"
  > {
  //현재 버튼이 가지고 있는 고유 타입
  theme: buttonColorTheme;
}

function FilledButton(props: FilledButtonProps) {
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
      fontWeight={otherProps.fontWeight}
      backgroundColor={`bg-${theme}`}
      marginBottom={otherProps.marginBottom}
      marginLeft={otherProps.marginLeft}
      marginRight={otherProps.marginRight}
      marginTop={otherProps.marginTop}
      /**
       * theme 관련
       * white와 light-gray 인 경우 font color는 검정색이여야 보이니까 지정
       */
      textColor={
        theme === "white" || theme === "light-gray"
          ? `text-black`
          : `text-white`
      }
      style={otherProps.style}
      {...otherProps}
    >
      {otherProps.icon}
      {otherProps.children}
    </BaseButton>
  );
}

export default FilledButton;
