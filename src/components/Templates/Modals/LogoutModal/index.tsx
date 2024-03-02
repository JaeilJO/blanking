"use client";

import Button from "@/components/Atoms/Button";
import FlexBox from "@/components/Atoms/FlexBox";
import Modal from "@/components/Atoms/Modal";

import Text from "@/components/Atoms/Text";

import { useRouter } from "next/navigation";

import useLogout from "./useLogout.hook";

function LogoutModal() {
  const router = useRouter();
  const { isLoading, signOutHandle } = useLogout();

  const cancelHandle = () => {
    router.back();
  };

  return (
    <Modal.ModalBox>
      <FlexBox flexDirection="column" gap={2}>
        <Text.SubTitle weight="bold" textAlign="center">
          Logout
        </Text.SubTitle>
        <Text.Body textAlign="center" level="01">
          로그아웃을 진행하시겠습니까?
        </Text.Body>
        <Button.FillButton
          type="button"
          theme="warn"
          onClick={signOutHandle}
          disabled={isLoading}
        >
          로그아웃
        </Button.FillButton>
        <Button.LineButton
          type="button"
          theme="transparent"
          onClick={cancelHandle}
          disabled={isLoading}
        >
          아니오
        </Button.LineButton>
      </FlexBox>
    </Modal.ModalBox>
  );
}

export default LogoutModal;
