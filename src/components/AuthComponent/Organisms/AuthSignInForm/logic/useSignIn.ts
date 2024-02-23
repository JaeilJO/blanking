import { useAlertStore } from "@/zustand/alertStore";
import { useRouter } from "next/navigation";

import useIsLoading from "../../../../../hooks/useIsLoading";

import { signIn } from "next-auth/react";

export default function useSignIn() {
  const router = useRouter();
  const { error, loading, success } = useAlertStore((state) => state);

  const { isLoading, setIsLoading } = useIsLoading("로그인 중입니다.", loading);

  const onSubmit = async (data: { [key: string]: string }) => {
    setIsLoading(true);
    const res = await signIn("credentials", {
      ...data,
      redirect: false,
    });

    if (res?.ok) {
      setIsLoading(false);
      success(`환영합니다`);
      router.replace(`/user/`);
    }

    if (!res?.ok) {
      setIsLoading(false);
      error("이메일 혹은 비밀번호를 확인해주세요");
    }
  };

  return { isLoading, onSubmit };
}
