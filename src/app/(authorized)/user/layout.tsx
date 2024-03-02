// Utils
import { NextAuthOption } from "@/lib/nextAuth/auth";
import { getServerSession } from "next-auth";

import dynamic from "next/dynamic";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import getGroups from "@/services/getGroups";

// Components
const ReactQueryProvider = dynamic(
  () => import("@/components/ReactQueryProvider"),
  { ssr: false }
);
import SidebarTemplate from "@/components/Sidebar/Templates/SidebarTemplate";
import UserPageWrapper from "@/components/UserPage/Atoms/UserPageWrapper";

async function Layout({
  children,
  createGroupModal,
  deleteGroupModal,
  createPageModal,
  deletePageModal,
  changeGroupNameModal,
  changePageNameModal,
  logoutModal,
}: {
  children: React.ReactNode;
  createGroupModal: React.ReactNode;
  deleteGroupModal: React.ReactNode;
  createPageModal: React.ReactNode;
  deletePageModal: React.ReactNode;
  changeGroupNameModal: React.ReactNode;
  changePageNameModal: React.ReactNode;
  logoutModal: React.ReactNode;
}) {
  const session = await getServerSession(NextAuthOption);
  const subkey = session?.user.subkey || "";
  const queryClient = new QueryClient();

  if (subkey) {
    await queryClient.prefetchQuery({
      queryKey: ["groups"],
      queryFn: () => getGroups(subkey),
    });
  }

  const dehydratedState = dehydrate(queryClient);

  return (
    <ReactQueryProvider>
      {/* Modals */}
      {changePageNameModal}
      {changeGroupNameModal}
      {createGroupModal}
      {deleteGroupModal}
      {createPageModal}
      {deletePageModal}
      {logoutModal}

      {/* Sidebar */}
      <HydrationBoundary state={dehydratedState}>
        <SidebarTemplate subkey={subkey} />
      </HydrationBoundary>

      {/* UserPage */}
      <UserPageWrapper>{children}</UserPageWrapper>
    </ReactQueryProvider>
  );
}

export default Layout;
