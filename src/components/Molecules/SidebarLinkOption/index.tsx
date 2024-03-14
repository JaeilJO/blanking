import Link from "@/components/Atoms/Link";
import { UrlObject } from "url";

export interface SidebarLinkOptionProps {
  href: string | UrlObject;
  icon: React.ReactNode;
}

function SidebarLinkOption({ href, icon }: SidebarLinkOptionProps) {
  const lightGrayDark = " #C4C4C4";
  return (
    <Link.Square href={href} color={lightGrayDark} size={30} fontSize="body-01">
      {icon}
    </Link.Square>
  );
}

export default SidebarLinkOption;
