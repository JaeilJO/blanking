"use client";

import FlexBox from "@/components/Atoms/FlexBox";
import Text from "@/components/Atoms/Text";
import ModalFrame from "@/components/Molecules/ModalFrame";
import UserInfoForm from "@/components/Organisms/UserInfoForm";
import useCreatePage from "@/hooks/useCreatePage";

import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

function CreatePageModal() {
  const searchParams = useSearchParams();
  const session = useSession();
  const router = useRouter();

  //Subkey
  const subkey = session.data?.user.subkey as string;

  //Group Name
  const groupname = decodeURIComponent(searchParams.get("groupname") as string);

  const { mutate } = useCreatePage({ subkey, groupname, router });

  const submitHandler = (data: { [key: string]: string }) => {
    mutate({ pagename: data.pagename });
  };
  return (
    <ModalFrame title="Create Page">
      <FlexBox.Column gap="gap-1">
        <Text.Body textAlign="text-center" fontWeight="font-regular">
          추가할 그룹 : {groupname}
        </Text.Body>
      </FlexBox.Column>
      <UserInfoForm>
        <UserInfoForm.Form onSubmit={submitHandler} gap="gap-1">
          <UserInfoForm.Input.NoLabel
            name="pagename"
            placeholder="페이지 이름을 입력해주세요"
            required
          />
          <Text.Body fontSize="body-02" textAlign="text-center" color="black">
            특수문자 제외 <b>영어 대 소문자 혹은 한글</b>만 사용 가능합니다
          </Text.Body>
          <UserInfoForm.SubmitButton>페이지 추가</UserInfoForm.SubmitButton>
        </UserInfoForm.Form>
      </UserInfoForm>
    </ModalFrame>
  );
}

export default CreatePageModal;
