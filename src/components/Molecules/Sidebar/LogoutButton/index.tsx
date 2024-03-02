"use client";

import Avatar from "@/components/Atoms/Avatar";

import FlexBox from "@/components/Atoms/FlexBox";
import Text from "@/components/Atoms/Text";
import LogoutButtonWrapper from "../LogoutButtonWrapper";

interface LogoutButtonProps {
  name: string;
  email: string;
}

function LogoutButton({ name, email }: LogoutButtonProps) {
  return (
    <LogoutButtonWrapper href={"/user/logout"}>
      <Avatar name={name} fontSize="title-02" />
      <FlexBox flexDirection="column">
        <Text.Body weight="bold" level="01">
          {name}
        </Text.Body>
        <Text.Body level="02">{email}</Text.Body>
      </FlexBox>
    </LogoutButtonWrapper>
  );
}

export default LogoutButton;
