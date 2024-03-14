import Link from "@/components/Atoms/Link";
import { LinkColorTheme } from "@/components/Atoms/Link/BaseLink";
import { UrlObject } from "url";

function PageCardOptionLink({
  href,
  theme,
  style,
}: {
  href: string | UrlObject;
  theme: LinkColorTheme;
  style?: React.CSSProperties;
}) {
  return <Link.Circle style={style} size={20} href={href} theme={theme} />;
}

export default PageCardOptionLink;
