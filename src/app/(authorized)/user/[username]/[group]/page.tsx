// Utils
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { getPages } from "@/services/getPages";
import { getServerSession } from "next-auth";
import { NextAuthOption } from "@/lib/nextAuth/auth";

// Components
import GroupPageTemplate from "@/components/GroupPage/Templates/GroupPage";

async function Page({ params }: { params: { group: string } }) {
  const current_group_name = decodeURIComponent(params.group as string);
  const session = await getServerSession(NextAuthOption);
  const username = session?.user.name as string;
  const subkey = session?.user.subkey as string;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["pages", { groupname: current_group_name }],
    queryFn: () => getPages({ groupname: current_group_name, subkey }),
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <GroupPageTemplate groupname={current_group_name} username={username} />
    </HydrationBoundary>
  );
}

export default Page;
