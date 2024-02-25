"use client";

// Utils
import { useSession } from "next-auth/react";
import { useSideBarStatusStore } from "@/zustand/sideBarStatusStore";

// Components
import SidebarWrapper from "../../Atoms/SidebarWrapper";
import SidebarName from "../../Molecules/SidebarName";
import SidebarStatusButton from "../../Atoms/SidebarStatusButton";
import GroupCategory from "../../Organisms/GroupCategory";

function SidebarTemplate({ subkey }: { subkey: string }) {
  const session = useSession();

  const { status, sidebarStatusHandler } = useSideBarStatusStore(
    (state) => state
  );

  const username = session?.data?.user?.name || "";

  const email = session?.data?.user?.email || "";

  return (
    <SidebarWrapper status={status}>
      <SidebarStatusButton status={status} onClick={sidebarStatusHandler} />
      <SidebarName name={username} email={email} />
      <GroupCategory subkey={subkey} />
    </SidebarWrapper>
  );
}

export default SidebarTemplate;
