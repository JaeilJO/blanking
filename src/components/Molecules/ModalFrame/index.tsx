"use client";

import Button from "@/components/Atoms/Button";
import Text from "@/components/Atoms/Text";
import ModalWrapper from "@/components/Atoms/Wrappers/ModalWrapper";
import { useRouter } from "next/navigation";

function ModalFrame({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const router = useRouter();
  const cancleHandler = () => {
    router.back();
  };
  return (
    <ModalWrapper>
      <Text.Title fontSize="tit-03" textAlign="text-center">
        {title}
      </Text.Title>
      {children}
      <Button.Line onClick={cancleHandler} theme={"light-gray"}>
        Cancel
      </Button.Line>
    </ModalWrapper>
  );
}

export default ModalFrame;
