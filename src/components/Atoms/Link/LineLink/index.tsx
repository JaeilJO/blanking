import BaseLink, { LinkColorTheme } from "../BaseLink";
import BaseLinkProps from "../BaseLink/index.type";

// 사용자가 지정하면 안되는 부분 지정
interface LineLinkProps
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

function LineLink(props: LineLinkProps) {
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
      borderColor={`border-${theme}`}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
      borderWidth={borderWidth}
      // white인 경우 font color는 검정색이여야 보이니까 지정
      textColor={theme === "white" ? `text-black` : `text-${theme}`}
      disabled={disabled}
      href={href}
    >
      {icon}
      {children}
    </BaseLink>
  );
}

export default LineLink;
