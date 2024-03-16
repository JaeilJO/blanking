"use client";

import Text from "@/components/Atoms/Text";
import ModalFrame from "@/components/Molecules/ModalFrame";
import UserInfoForm from "@/components/Organisms/UserInfoForm";
import useCreateGroup from "@/hooks/useCreateGroup";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function CreateGroupModal() {
  const router = useRouter();
  const session = useSession();

  //Group Name

  // User Subkey
  const subkey = session?.data?.user.subkey as string;

  // useCreaqteGroup
  const { mutate } = useCreateGroup({ subkey, router, isModal: true });

  const handleSubmit = (data: { [key: string]: string }) => {
    mutate(data);
  };
  return (
    <ModalFrame title="Delete Group">
      <Text.Body textAlign="text-center" fontSize="body-02" wrap={true}>
        특수문자를 제외한 <b>영어 대 소문자 혹은 한글</b>만 가능합니다
      </Text.Body>
      <UserInfoForm>
        <UserInfoForm.Form onSubmit={handleSubmit} gap="gap-1">
          <UserInfoForm.Input.NoLabel
            type="text"
            name="groupname"
            placeholder="추가할 그룹을 입력해주세요"
            theme="gray"
            required
          />
          <UserInfoForm.SubmitButton theme="gray">
            그룹 추가하기
          </UserInfoForm.SubmitButton>
        </UserInfoForm.Form>
      </UserInfoForm>
    </ModalFrame>
  );
}

export default CreateGroupModal;
