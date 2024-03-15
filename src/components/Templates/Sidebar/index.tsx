"use client";

import Link from "@/components/Atoms/Link";
import Skeleton from "@/components/Atoms/Skeleton";
import Text from "@/components/Atoms/Text";
import SidebarWrapper from "@/components/Atoms/Wrappers/SidebarWrapper";
import SidebarUserInfo from "@/components/Molecules/SidebarUserInfo";

import SidebarItem from "@/components/Templates/SideBarItem";
import getGroups from "@/services/getGroups";
import { Group } from "@/utils/modelTypes";

import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { redirect, useParams } from "next/navigation";

import { LuFolderPlus } from "react-icons/lu";

function Sidebar({ subkey }: { subkey: string }) {
  const params = useParams();
  const session = useSession();
  const username = session.data?.user.name || "";
  const userEmail = session.data?.user.email || "";

  const currentGroupName = decodeURIComponent(params.group as string);

  const currentPageName = decodeURIComponent(params.page as string);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["groups"],
    queryFn: () => getGroups(subkey),
  });

  if (isLoading) {
    return (
      <SidebarWrapper>
        <Skeleton.BoxSkeleton width="100%" height="50px" />
        <Skeleton.BoxSkeleton width="100%" height="30px" />
        <Skeleton.BoxSkeleton width="100%" height="30px" />
        <Skeleton.BoxSkeleton width="100%" height="30px" />
        <Skeleton.BoxSkeleton width="100%" height="50px" />
      </SidebarWrapper>
    );
  }

  if (!data) {
    return (
      <SidebarWrapper>
        <Text.Body>그룹이 없습니다.</Text.Body>
      </SidebarWrapper>
    );
  }

  if (isError) {
    return redirect("/404");
  }

  const groups = data.data;

  return (
    <SidebarWrapper>
      <SidebarUserInfo name={username} email={userEmail} />
      {groups.map((group: Group) => (
        <SidebarItem
          key={group.id}
          item={group}
          username={username}
          currentGroupName={currentGroupName}
          currentPageName={currentPageName}
        />
      ))}
      <Link.Filled
        theme="gray"
        icon={<LuFolderPlus />}
        href={"/user/creategroup"}
        fontWeight="font-bold"
        fontSize="body-02"
      >
        그룹 추가하기
      </Link.Filled>
    </SidebarWrapper>
  );
}

export default Sidebar;
