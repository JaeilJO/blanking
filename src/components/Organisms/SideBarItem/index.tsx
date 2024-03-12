"use client";

import FlexBox from "@/components/Atoms/FlexBox";
import Link from "@/components/Atoms/Link";
import SidebarGroupLink from "@/components/Molecules/SidebarGroupLink";
import SidebarPageLink from "@/components/Molecules/SidebarPageLink";
import { Group } from "@/utils/modelTypes";
import { LuFilePlus } from "react-icons/lu";

interface SidebarItemProps {
  item: Group;
  currentGroupName: string;
  currentPageName: string;
  username: string;
}

function SidebarItem({
  item,
  currentGroupName,
  currentPageName,
  username,
}: SidebarItemProps) {
  const { groupname, pages } = item;

  const groupHref = () => {
    if (currentGroupName === groupname) {
      return `/user/${username}`;
    }
    return `/user/${username}/${groupname}`;
  };

  const pageHref = (pagename: string) => {
    if (currentPageName === pagename) {
      return `/user/${username}/${groupname}`;
    }
    return `/user/${username}/${groupname}/${pagename}`;
  };

  return (
    <FlexBox.Column gap="gap-1">
      <SidebarGroupLink
        href={groupHref()}
        title={groupname}
        isOpen={groupname === currentGroupName}
      />

      {currentGroupName === groupname &&
        pages.map((page) => (
          <SidebarPageLink
            key={page.id}
            title={page.pagename}
            href={pageHref(page.pagename)}
            isOpen={page.pagename === currentPageName}
          />
        ))}
      {groupname === currentGroupName && (
        <Link.Solid
          theme="light-gray"
          href={{
            pathname: "/user/createpage",
            query: { groupname: currentGroupName },
          }}
          icon={<LuFilePlus />}
        >
          페이지추가
        </Link.Solid>
      )}
    </FlexBox.Column>
  );
}

export default SidebarItem;
