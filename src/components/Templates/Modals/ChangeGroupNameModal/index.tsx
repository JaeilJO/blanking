"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { useSession } from "next-auth/react";
import useChangeGroupName from "@/hooks/useChangeGroupName";

import ModalFrame from "@/components/Molecules/ModalFrame";
import Text from "@/components/Atoms/Text";
import UserInfoForm from "@/components/Organisms/UserInfoForm";

function ChangeGroupNameModal() {
  const searchParams = useSearchParams();
  const session = useSession();
  const router = useRouter();

  //Subkey
  const subkey = session.data?.user.subkey as string;

  //Group Name
  const groupname = decodeURIComponent(searchParams.get("groupname") as string);

  const { mutate } = useChangeGroupName({
    groupname,

    subkey,
    router,
  });

  const onSubmit = (data: { [key: string]: string }) => {
    mutate(data);
  };

  return (
    <ModalFrame title="Group 이름 변경하기">
      <Text.Body fontSize="body-02">
        특수문자를 제외한 <b>영어 대 소문자 혹은 한글</b>만을 사용해주세요
      </Text.Body>
      <UserInfoForm>
        <UserInfoForm.Form gap="gap-3" onSubmit={onSubmit}>
          <UserInfoForm.Input.NoLabel
            type="text"
            theme="gray"
            name="new_groupname"
            placeholder="새로운 그룹이름을 입력해주세요"
          />
          <UserInfoForm.SubmitButton theme="black">
            변경하기
          </UserInfoForm.SubmitButton>
        </UserInfoForm.Form>
      </UserInfoForm>
    </ModalFrame>
  );
}

export default ChangeGroupNameModal;
