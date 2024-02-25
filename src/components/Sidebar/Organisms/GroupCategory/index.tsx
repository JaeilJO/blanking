"use client";

// Utils
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import useGetGroups from "@/hooks/useGetGroups";

// Components
import GroupCategoryWrapper from "../../Atoms/GroupCategoryWrapper";
import GroupAddButton from "../../Molecules/GroupAddButton";
import GroupTitleButton from "../../Molecules/GroupTitleButton";

// Types
import { Group } from "@/utils/modelTypes";

function GroupCategory({ subkey }: { subkey: string }) {
  const params = useParams();

  const session = useSession();

  const username = session?.data?.user?.name as string;

  const currentGroupName = decodeURIComponent(params.group as string);

  const { data, isLoading } = useGetGroups({ subkey });

  const groups: Group[] = data || [];

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <GroupCategoryWrapper>
      {groups?.map((group: any) => (
        <GroupTitleButton
          key={group.groupname}
          username={username}
          groupname={group.groupname}
          currentGroupName={currentGroupName}
          pages={group.pages}
        />
      ))}
      <GroupAddButton />
    </GroupCategoryWrapper>
  );
}

export default GroupCategory;
