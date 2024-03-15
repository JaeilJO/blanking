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
      <Button.OutLine onClick={cancleHandler} theme={"light-gray"}>
        Cancel
      </Button.OutLine>
    </ModalWrapper>
  );
}

export default ModalFrame;
