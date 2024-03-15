"use client";

import Button from "@/components/Atoms/Button";
import FlexBox from "@/components/Atoms/FlexBox";
import Text from "@/components/Atoms/Text";
import ModalFrame from "@/components/Molecules/ModalFrame";

import useDeletePage from "@/hooks/useDeletePage";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

function DeletePageModal() {
  const router = useRouter();
  const session = useSession();

  // usersubid
  const subkey = session.data?.user.subkey as string;
  // Group Name
  const searchParams = useSearchParams();
  const groupname = decodeURIComponent(searchParams.get("groupname") as string);
  const pagename = decodeURIComponent(searchParams.get("pagename") as string);

  const { mutate } = useDeletePage({ groupname, subkey, router, pagename });

  // Sumbit Handler
  const submitHandler = () => {
    mutate();
  };

  return (
    <ModalFrame title="Delete Group">
      <FlexBox.Column gap="gap-1">
        <Text.Body textAlign="text-center">선택한 페이지</Text.Body>
        <Text.Body textAlign="text-center" fontWeight="font-bold">
          {pagename}
        </Text.Body>
      </FlexBox.Column>

      <Button.Filled type="button" theme="red" onClick={submitHandler}>
        삭제하기
      </Button.Filled>
    </ModalFrame>
  );
}

export default DeletePageModal;
