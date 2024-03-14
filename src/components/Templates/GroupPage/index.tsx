"use client";

import FlexBox from "@/components/Atoms/FlexBox";
import Text from "@/components/Atoms/Text";
import AuthorizedPageWrapper from "@/components/Atoms/Wrappers/AuthorizedPageWrapper";

import { getPages } from "@/services/getPages";
import { useQuery } from "@tanstack/react-query";
import PageTable from "../PageTable";
import { redirect } from "next/navigation";
import Skeleton from "@/components/Atoms/Skeleton";

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

  // 그룹에 들어와 있는 상태에서 해당 그룹의 이름을 변경하는 경우
  // 주소는 그대로 이기 때문에 /user 로 리다이렉트
  if (data === "") {
    return redirect("/user");
  }

  if (isLoading) {
    return (
      <AuthorizedPageWrapper>
        <FlexBox.Column gap="gap-5">
          <Skeleton.TextSkeleton width={400} fontSize="title-01" />
          <FlexBox.Row gap="gap-5" flexWrap="wrap">
            <Skeleton.BoxSkeleton width="300px" height="150px" />
            <Skeleton.BoxSkeleton width="300px" height="150px" />
            <Skeleton.BoxSkeleton width="300px" height="150px" />
            <Skeleton.BoxSkeleton width="300px" height="150px" />
          </FlexBox.Row>
        </FlexBox.Column>
      </AuthorizedPageWrapper>
    );
  }

  if (isError) {
    return redirect("/404");
  }

  return (
    <AuthorizedPageWrapper>
      <FlexBox.Column gap="gap-5">
        <Text.Title>{current_group_name}</Text.Title>
        <PageTable groupname={current_group_name} pages={data} />
      </FlexBox.Column>
    </AuthorizedPageWrapper>
  );
}

export default GroupPage;
