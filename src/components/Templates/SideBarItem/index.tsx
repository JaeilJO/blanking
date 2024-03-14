"use client";

import FlexBox from "@/components/Atoms/FlexBox";
import Link from "@/components/Atoms/Link";

import { Group } from "@/utils/modelTypes";
import { LuFilePlus } from "react-icons/lu";
import SidebarGroupLink from "../SidebarGroupLink";
import SidebarPageLink from "../SidebarPageLink";

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

  return (
    <FlexBox.Column gap="gap-1">
      <SidebarGroupLink
        groupname={groupname}
        isOpen={groupname === currentGroupName}
        username={username}
      />

      {currentGroupName === groupname &&
        pages.map((page) => (
          <SidebarPageLink
            key={page.id}
            username={username}
            groupname={groupname}
            pagename={page.pagename}
            isOpen={
              groupname === currentGroupName &&
              currentPageName === page.pagename
            }
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
