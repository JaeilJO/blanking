// Utils
import { getServerSession } from "next-auth";
import { NextAuthOption } from "@/lib/nextAuth/auth";
import { redirect } from "next/navigation";

// Components

import UserNamePageWrapper from "@/components/Atoms/Wrappers/UserNamePageWrapper";
import GroupMakerWrapper from "@/components/Atoms/Wrappers/GroupMakerWrapper";
import GroupMakerForm from "@/components/Templates/GroupMakerForm";
import HeadingWithDescription from "@/components/Molecules/HeadingWithDescription";
import FlexBox from "@/components/Atoms/FlexBox";

export default async function Page({
  params,
}: {
  params: { username: string };
}) {
  const session = await getServerSession(NextAuthOption);
  const paramUsername = decodeURIComponent(params.username);
  const username = session?.user.name || "";
  const subkey = session?.user.subkey || "";
  if (paramUsername !== username) {
    redirect("/not-found");
  }

  return (
    <UserNamePageWrapper>
      <GroupMakerWrapper>
        <FlexBox.Column gap="gap-4">
          <HeadingWithDescription
            title="Create Group"
            description="그룹을 생성해보세요!"
            alignText="center"
          />
          <GroupMakerForm subkey={subkey} />
        </FlexBox.Column>
      </GroupMakerWrapper>
    </UserNamePageWrapper>
  );
}
