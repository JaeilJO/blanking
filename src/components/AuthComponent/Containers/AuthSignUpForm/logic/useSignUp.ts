import { useAlertStore } from "@/zustand/alertStore";
import { useRouter } from "next/navigation";

import useIsLoading from "../../../../../hooks/useIsLoading";

import axios from "axios";
import { signUp } from "@/services/signup";

export default function useSignUp() {
  const router = useRouter();
  const { error, loading, success } = useAlertStore((state) => state);

  const { isLoading, setIsLoading } = useIsLoading(
    "회원가입 중 입니다",
    loading
  );

  const onSubmit = async (data: { [key: string]: string }) => {
    setIsLoading(true);
    try {
      await signUp(data);
      setIsLoading(false);
      success("회원가입이 완료되었습니다.");
      router.replace("/auth/signin");
    } catch (e) {
      if (axios.isAxiosError(e)) {
        if (e.request?.status === 403) {
          setIsLoading(false);
          error("이미 존재하는 이메일 입니다");
        }

        if (e.request?.status === 405) {
          setIsLoading(false);
          error(
            "이름에 공백은 포함할 수 있지만, 공백만으로 이름을 지을 수 없습니다"
          );
        }

        if (e.request?.status === 406) {
          setIsLoading(false);
          error(
            "비밀번호는 영문 대문자,소문자 하나 그리고 숫자를 조합시켜주세요"
          );
        }

        if (e.request?.status === 407) {
          setIsLoading(false);
          error("회원가입에 실패했습니다. 새로고침 후 다시 시도해주세요");
        }
      }
    }
  };
  return { isLoading, onSubmit };
}
