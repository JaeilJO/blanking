"use client";

// Components
import SidebarTitleButton from "../../Atoms/SidebarTitleButton";
import PageCategory from "../PageCategory";

// Icons
import { LuFolder } from "react-icons/lu";
import { LuFolderOpen } from "react-icons/lu";

// Types
import { Page } from "@/utils/modelTypes";

interface GroupTitleButtonProps {
  groupname: string;
  currentGroupName: string;
  username: string;
  pages: Page[];
}

function GroupTitleButton({
  groupname,
  username,
  currentGroupName,
  pages,
}: GroupTitleButtonProps) {
  const isCurrentGroup = groupname === currentGroupName;

  return (
    <>
      <SidebarTitleButton
        href={
          isCurrentGroup
            ? `/user/${username}`
            : `/user/${username}/${groupname}`
        }
        title={groupname}
        icon={isCurrentGroup ? <LuFolderOpen /> : <LuFolder />}
        fontSize="body-01"
      />

      {isCurrentGroup && (
        <PageCategory
          pages={pages}
          currentGroupName={currentGroupName}
          groupname={groupname}
          username={username}
        />
      )}
    </>
  );
}

export default GroupTitleButton;
