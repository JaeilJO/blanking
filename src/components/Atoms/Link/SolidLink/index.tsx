import BaseLink, { LinkColorTheme } from "../BaseLink";
import BaseLinkProps from "../BaseLink/index.type";

// 사용자가 지정하면 안되는 부분 지정
interface FilledButtonProps
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

function SolidLink(props: FilledButtonProps) {
  const {
    theme = "primary",
    display = "block",

    fontSize = "body-01",
    fontWeight = "font-light",

    marginBottom,
    marginRight,
    marginTop,
    marginLeft,

    textAlign = "text-center",

    icon,

    disabled,

    children,
    href,
  } = props;

  return (
    <BaseLink
      //기본 패딩
      paddingBottom="pb-3"
      paddingTop="pt-3"
      paddingRight="pr-4"
      paddingLeft="pl-4"
      // 사용자가 지정할 수 있는 것 (props로 받아옴)
      fontSize={fontSize}
      display={display}
      textAlign={textAlign}
      fontWeight={fontWeight}
      backgroundColor={`bg-${theme}`}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
      // white인 경우 빼고 모두 흰색
      textColor={
        theme === "white" || theme === "light-gray"
          ? `text-black`
          : `text-white`
      }
      disabled={disabled}
      href={href}
    >
      {icon}
      {children}
    </BaseLink>
  );
}

export default SolidLink;
