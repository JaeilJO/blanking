"use client";

import Button from "@/components/Atoms/Button";
import FlexBox from "@/components/Atoms/FlexBox";
import Text from "@/components/Atoms/Text";
import ModalFrame from "@/components/Molecules/ModalFrame";
import useDeleteGroup from "@/hooks/useDeleteGroup";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";

function DeleteGroupModal() {
  const router = useRouter();
  const session = useSession();

  // usersubid
  const subkey = session.data?.user.subkey as string;
  // Group Name
  const searchParams = useSearchParams();
  const groupname = decodeURIComponent(searchParams.get("groupname") as string);

  const { mutate } = useDeleteGroup({ groupname, subkey, router });

  // Sumbit Handler
  const submitHandler = () => {
    mutate();
  };

  return (
    <ModalFrame title="Delete Group">
      <FlexBox.Column gap="gap-1">
        <Text.Body textAlign="text-center">선택한 그룹</Text.Body>
        <Text.Body textAlign="text-center" fontWeight="font-bold">
          {groupname}
        </Text.Body>
      </FlexBox.Column>

      <Button.Solid type="button" theme="red" onClick={submitHandler}>
        삭제하기
      </Button.Solid>
    </ModalFrame>
  );
}

export default DeleteGroupModal;
