"use client";

// Components
import SidebarAddButton from "../../Atoms/SidebarAddButton";

// Icons
import { FiFolderPlus } from "react-icons/fi";

function GroupAddButton() {
  return (
    <SidebarAddButton
      href={`/user/creategroup`}
      title="Group 추가..."
      icon={<FiFolderPlus />}
      fontSize="body-01"
    />
  );
}

export default GroupAddButton;
