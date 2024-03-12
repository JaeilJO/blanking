import Link from "@/components/Atoms/Link";
import { LuFolder } from "react-icons/lu";

import { LuFolderOpen } from "react-icons/lu";
import { UrlObject } from "url";

interface SidebarGroupLinkProps {
  href: string | UrlObject;
  isOpen: boolean;
  title: string;
}

function SidebarGroupLink({ href, isOpen, title }: SidebarGroupLinkProps) {
  return (
    <Link.SidebarLink
      href={href}
      isOpen={isOpen}
      title={title}
      openIcon={<LuFolderOpen />}
      closeIcon={<LuFolder />}
      alignContent="left"
      titleSize="body-01"
      iconSize="sub-01"
      paddingBottom="pb-3"
      paddingTop="pt-3"
      paddingLeft="pl-1"
      paddingRight="pr-1"
    />
  );
}

export default SidebarGroupLink;
