import Link from "@/components/Atoms/Link";
import { LuFolder } from "react-icons/lu";
import { LuFolderClosed } from "react-icons/lu";
import { UrlObject } from "url";
import { LuFile } from "react-icons/lu";
import { LuFileCheck } from "react-icons/lu";

interface SidebarPageLinkProps {
  href: string | UrlObject;
  isOpen: boolean;
  title: string;
}

function SidebarPageLink({ href, isOpen, title }: SidebarPageLinkProps) {
  return (
    <Link.SidebarLink
      href={href}
      isOpen={isOpen}
      title={title}
      openIcon={<LuFileCheck />}
      closeIcon={<LuFile />}
      alignContent="left"
      titleSize="body-01"
      iconSize="sub-01"
      paddingBottom="pb-1"
      paddingTop="pt-1"
      paddingLeft="pl-4"
      paddingRight="pr-1"
    />
  );
}

export default SidebarPageLink;
