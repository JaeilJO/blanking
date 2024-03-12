"use client";

import Button from "@/components/Atoms/Button";
import Link from "@/components/Atoms/Link";
import Text from "@/components/Atoms/Text";
import SidebarWrapper from "@/components/Atoms/Wrappers/SidebarWrapper";

import SidebarItem from "@/components/Organisms/SideBarItem";
import getGroups from "@/services/getGroups";
import { Group } from "@/utils/modelTypes";
import { useSideBarStatusStore } from "@/zustand/sideBarStatusStore";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { BsChevronCompactLeft } from "react-icons/bs";
import { LuFolderPlus } from "react-icons/lu";

function Sidebar({ subkey }: { subkey: string }) {
  const params = useParams();
  const session = useSession();
  const username = session.data?.user.name || "";

  const currentGroupName = decodeURIComponent(params.group as string);

  const currentPageName = decodeURIComponent(params.page as string);

  const { status, sidebarStatusHandler } = useSideBarStatusStore(
    (state) => state
  );

  const { data, isLoading, isError } = useQuery({
    queryKey: ["groups"],
    queryFn: () => getGroups(subkey),
  });

  if (isLoading) {
    return (
      <SidebarWrapper>
        <Text.Body>로딩 중...</Text.Body>
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

  const groups = data.data;

  return (
    <SidebarWrapper>
      {groups.map((group: Group) => (
        <SidebarItem
          key={group.id}
          item={group}
          username={username}
          currentGroupName={currentGroupName}
          currentPageName={currentPageName}
        />
      ))}
      <Link.Solid
        theme="gray"
        icon={<LuFolderPlus />}
        href={"/user/creategroup"}
        fontWeight="font-bold"
        fontSize="body-02"
      >
        그룹 추가하기
      </Link.Solid>

      {/* open close button */}
      <Button.Text
        fontSize="sub-01"
        display="inline"
        theme="gray"
        style={{
          position: "absolute",
          right: "-24px",
          top: "50%",

          transform: status
            ? "translateY(-50%) "
            : "translateY(-50%) rotate(180deg)",
        }}
        onClick={sidebarStatusHandler}
      >
        <BsChevronCompactLeft />
      </Button.Text>
    </SidebarWrapper>
  );
}

export default Sidebar;
