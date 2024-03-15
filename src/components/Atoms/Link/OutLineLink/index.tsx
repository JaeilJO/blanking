// Utils
import BaseLink, { LinkColorTheme } from "../BaseLink";

// Types
import BaseLinkProps from "../BaseLink/index.type";

// 사용자가 지정하면 안되는 부분 지정
interface OutOutLineLinkProps
  extends Omit<
    BaseLinkProps,
    | "backgroundColor"
    | "borderColor"
    | "textColor"
    | "paddingBottom"
    | "paddingLeft"
    | "paddingRight"
    | "paddingTop"
  > {
  //현재 버튼이 가지고 있는 고유 타입
  theme: LinkColorTheme;
}

function OutOutLineLink(props: OutOutLineLinkProps) {
  const { theme = "primary", ...otherProps } = props;

  return (
    <BaseLink
      //기본 패딩
      paddingBottom="pb-2"
      paddingTop="pt-2"
      paddingRight="pr-5"
      paddingLeft="pl-5"
      // 사용자가 지정할 수 있는 것 (props로 받아옴)
      display={otherProps.display}
      fontSize={otherProps.fontSize}
      fontWeight={otherProps.fontWeight}
      textAlign={otherProps.textAlign}
      borderColor={`border-${theme}`}
      marginBottom={otherProps.marginBottom}
      marginLeft={otherProps.marginLeft}
      marginRight={otherProps.marginRight}
      marginTop={otherProps.marginTop}
      borderWidth={otherProps.borderWidth}
      // white인 경우 font color는 검정색이여야 보이니까 지정
      textColor={theme === "white" ? `text-black` : `text-${theme}`}
      disabled={otherProps.disabled}
      href={otherProps.href}
    >
      {otherProps.icon}
      {otherProps.children}
    </BaseLink>
  );
}

export default OutOutLineLink;
