"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import useChangePageName from "@/hooks/useChangePageName";

import ModalFrame from "@/components/Molecules/ModalFrame";
import Text from "@/components/Atoms/Text";
import UserInfoForm from "@/components/Organisms/UserInfoForm";

function ChangePageNameModal() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const session = useSession();

  //Subkey
  const subkey = session.data?.user.subkey as string;

  //Group Name
  const groupname = decodeURIComponent(searchParams.get("groupname") as string);

  //Page Name
  const pagename = decodeURIComponent(searchParams.get("pagename") as string);

  const { mutate } = useChangePageName({
    subkey,
    groupname,
    pagename,
    router,
  });

  const onSubmit = (data: { [key: string]: string }) => {
    mutate(data);
  };

  return (
    <ModalFrame title={"페이지 이름 변경"}>
      <Text.Body fontSize="body-02">
        특수문자를 제외한 <b>영어 대 소문자 혹은 한글</b>만을 사용해주세요
      </Text.Body>

      <UserInfoForm>
        <UserInfoForm.Form onSubmit={onSubmit} gap="gap-2">
          <UserInfoForm.Input.NoLabel
            theme="gray"
            type="text"
            name={"new_pagename"}
            placeholder="변경할 이름을 입력해주세요"
            required
          />
          <UserInfoForm.SubmitButton>이름 변경하기</UserInfoForm.SubmitButton>
        </UserInfoForm.Form>
      </UserInfoForm>
    </ModalFrame>
  );
}

export default ChangePageNameModal;
