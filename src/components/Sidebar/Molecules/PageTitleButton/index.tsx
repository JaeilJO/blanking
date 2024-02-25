"use client";

// Components
import SidebarTitleButton from "../../Atoms/SidebarTitleButton";

// Icons
import { LuFile } from "react-icons/lu";
import { LuFileCheck2 } from "react-icons/lu";

interface PageTitleButtonProps {
  currentPageName: string;
  pagename: string;
  currentGroupName: string;
  groupname: string;
  username: string;
}

function PageTitleButton({
  currentPageName,
  pagename,
  currentGroupName,
  groupname,
  username,
}: PageTitleButtonProps) {
  const isCurrentPage =
    currentPageName === pagename && currentGroupName === groupname;

  return (
    <SidebarTitleButton
      title={pagename}
      href={
        isCurrentPage
          ? `/user/${username}/${groupname}`
          : `/user/${username}/${groupname}/${pagename}`
      }
      icon={isCurrentPage ? <LuFileCheck2 /> : <LuFile />}
      fontSize="body-02"
    />
  );
}

export default PageTitleButton;
