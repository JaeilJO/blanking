"use client";

// Utils
import { redirect, useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import useGetPages from "@/hooks/useGetpages";

// Components
import GroupPageTableWrapper from "../../Atoms/GroupPageTableWrapper";
import GroupPageTableItem from "../../Molecules/GroupPageTableItem";

// Types
import { Page } from "@/utils/modelTypes";

interface GroupPageTableProps {
  username: string;
  currentGroupName: string;
}

function GroupPageTable({ username, currentGroupName }: GroupPageTableProps) {
  const session = useSession();
  const params = useParams();

  const subkey = session.data?.user.subkey as string;
  const parameterUsername = decodeURIComponent(params.username as string);
  const isCurrentUser = parameterUsername === username;

  const { data, isLoading } = useGetPages({
    groupname: currentGroupName,
    subkey,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isCurrentUser) {
    redirect("/not-found");
  }

  if (data.length === 0) {
    return <div>페이지가 없습니다.</div>;
  }

  return (
    <GroupPageTableWrapper>
      {data?.map((page: Page) => {
        return (
          <GroupPageTableItem
            key={page.id}
            pagename={page.pagename}
            groupname={currentGroupName}
          />
        );
      })}
    </GroupPageTableWrapper>
  );
}

export default GroupPageTable;
