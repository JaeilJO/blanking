"use client";

import FlexBox from "@/components/Atoms/FlexBox";
import Text from "@/components/Atoms/Text";
import AuthorizedPageWrapper from "@/components/Atoms/Wrappers/AuthorizedPageWrapper";
import GroupPageWrapper from "@/components/Atoms/Wrappers/AuthorizedPageWrapper";
import { getPages } from "@/services/getPages";
import { useQueries, useQuery } from "@tanstack/react-query";

function GroupPage({
  current_group_name,
  subkey,
}: {
  current_group_name: string;
  subkey: string;
}) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["pages", { groupname: current_group_name }],
    queryFn: () => getPages({ groupname: current_group_name, subkey }),
  });
  return (
    <AuthorizedPageWrapper>
      <FlexBox.Column>
        <Text.Title>{current_group_name}</Text.Title>
      </FlexBox.Column>
    </AuthorizedPageWrapper>
  );
}

export default GroupPage;
