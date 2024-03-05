"use client";

// Utils
import { useSession } from "next-auth/react";
import { useSideBarStatusStore } from "@/zustand/sideBarStatusStore";

// Components
import SidebarWrapper from "../../Atoms/SidebarWrapper";

import SidebarStatusButton from "../../Atoms/SidebarStatusButton";
import GroupCategory from "../../Organisms/GroupCategory";
import LogoutLink from "@/components/Molecules/Sidebar/LogoutButton";
import Button from "@/components/Atoms/Button";

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
      <LogoutLink name={username} email={email} />
      {/* <GroupCategory subkey={subkey} /> */}
      <Button.FillButton theme="transparent">Hello</Button.FillButton>
      <Button.FillButton theme="transparent">Hello</Button.FillButton>
      <Button.FillButton theme="transparent">Hello</Button.FillButton>
    </SidebarWrapper>
  );
}

export default SidebarTemplate;
