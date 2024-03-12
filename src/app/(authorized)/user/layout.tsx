// Utils
import { NextAuthOption } from "@/lib/nextAuth/auth";
import { getServerSession } from "next-auth";

import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import getGroups from "@/services/getGroups";

import UserPageWrapper from "@/components/UserPage/Atoms/UserPageWrapper";

import ReactQueryProvider from "@/components/ReactQueryProvider";
import Sidebar from "@/components/Templates/Sidebar";

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
  const queryClient = new QueryClient();
  const session = await getServerSession(NextAuthOption);
  const subkey = session?.user.subkey || "";

  await queryClient.prefetchQuery({
    queryKey: ["groups"],
    queryFn: () => getGroups(subkey),
  });

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
        <Sidebar subkey={subkey} />

        {/* UserPage */}
        <UserPageWrapper>{children}</UserPageWrapper>
      </HydrationBoundary>
    </ReactQueryProvider>
  );
}

export default Layout;
