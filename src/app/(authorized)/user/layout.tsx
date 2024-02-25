// Utils
import { NextAuthOption } from "@/lib/nextAuth/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import dynamic from "next/dynamic";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import getGroups from "@/services/getGroups";

// Style
import style from "./layout.module.scss";

// Components
const ReactQueryProvider = dynamic(
  () => import("@/components/ReactQueryProvider"),
  { ssr: false }
);
import SidebarTemplate from "@/components/Sidebar/Templates/SidebarTemplate";

async function Layout({
  children,
  createGroupModal,
  deleteGroupModal,
  createPageModal,
  deletePageModal,
  changeGroupNameModal,
  changePageNameModal,
}: {
  children: React.ReactNode;
  createGroupModal: React.ReactNode;
  deleteGroupModal: React.ReactNode;
  createPageModal: React.ReactNode;
  deletePageModal: React.ReactNode;
  changeGroupNameModal: React.ReactNode;
  changePageNameModal: React.ReactNode;
}) {
  const session = await getServerSession(NextAuthOption);
  const subkey = session?.user.subkey || "";
  const queryClient = new QueryClient();

  if (!session) {
    redirect(`/auth/signin`);
  }
  if (subkey) {
    await queryClient.prefetchQuery({
      queryKey: ["groups"],
      queryFn: () => getGroups(subkey),
    });
  }

  const dehydratedState = dehydrate(queryClient);

  return (
    <ReactQueryProvider>
      <div>
        {/* Modals */}
        {changePageNameModal}
        {changeGroupNameModal}
        {createGroupModal}
        {deleteGroupModal}
        {createPageModal}
        {deletePageModal}

        {/* Sidebar */}
        <HydrationBoundary state={dehydratedState}>
          <SidebarTemplate subkey={subkey} />
        </HydrationBoundary>

        <main className={style.content_wrapper}>{children}</main>
      </div>
    </ReactQueryProvider>
  );
}

export default Layout;
