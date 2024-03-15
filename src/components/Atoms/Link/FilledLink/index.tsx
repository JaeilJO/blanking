// Utils
import BaseLink, { LinkColorTheme } from "../BaseLink";

// Types
import BaseLinkProps from "../BaseLink/index.type";

// 사용자가 지정하면 안되는 부분 지정
interface FilledLinkProps
  extends Omit<
    BaseLinkProps,
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
  theme: LinkColorTheme;
}

function FilledLink(props: FilledLinkProps) {
  const { theme = "primary", ...otherProps } = props;
  return (
    <BaseLink
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
      // white인 경우 빼고 모두 흰색
      textColor={
        theme === "white" || theme === "light-gray"
          ? `text-black`
          : `text-white`
      }
      disabled={otherProps.disabled}
      href={otherProps.href}
      style={otherProps.style}
    >
      {otherProps.icon}
      {otherProps.children}
    </BaseLink>
  );
}

export default FilledLink;
