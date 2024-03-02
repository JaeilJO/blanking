import { useAlertStore } from "@/zustand/alertStore";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const useSignIn = () => {
  const { success, loading, error } = useAlertStore((state) => state);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (data: { [key: string]: string }) => {
    loading("로그인 중 입니다.");
    setIsLoading(true);
    const res = await signIn("credentials", {
      ...data,
      redirect: false,
    });

    if (res?.ok) {
      success(`환영합니다`);
      router.replace(`/user/`);
    }

    if (!res?.ok) {
      error("이메일 혹은 비밀번호를 확인해주세요");
      setIsLoading(false);
    }
  };

  return { isLoading, onSubmit };
};

export default useSignIn;
