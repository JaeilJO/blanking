"use client";

import UserInfoForm from "@/components/Organisms/UserInfoForm";
import useCreateGroup from "@/hooks/useCreateGroup";

function GroupMakerForm({ subkey }: { subkey: string }) {
  const { mutate } = useCreateGroup({ subkey, isModal: false });

  return (
    <UserInfoForm>
      <UserInfoForm.Form gap="gap-4" onSubmit={(data: any) => mutate(data)}>
        <UserInfoForm.Input.NoLabel
          theme="gray"
          name="groupname"
          required
          placeholder="Group Name"
          type="text"
        />
        <UserInfoForm.SubmitButton theme="black">
          그룹 생성
        </UserInfoForm.SubmitButton>
      </UserInfoForm.Form>
    </UserInfoForm>
  );
}

export default GroupMakerForm;
