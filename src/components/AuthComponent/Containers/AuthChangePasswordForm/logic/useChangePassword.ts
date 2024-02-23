import changePassword from "@/services/changePassword";
import { useAlertStore } from "@/zustand/alertStore";

import { useRouter } from "next/navigation";
import axios from "axios";
import useIsLoading from "../../../../../hooks/useIsLoading";

interface useChangePasswordParasms {
  subkey: string;
}

export default function useChangePassword({
  subkey,
}: useChangePasswordParasms) {
  const router = useRouter();
  const { error, success, loading } = useAlertStore((state) => state);

  const { isLoading, setIsLoading } = useIsLoading(
    "Email 확인중입니다.",
    loading
  );

  const onSubmit = async (data: { [key: string]: string }) => {
    setIsLoading(true);
    try {
      await changePassword({ subkey, password: data.password });
      setIsLoading(false);
      success("비밀번호 변경이 완료되었습니다. 다시 로그인을 시도해주세요");
      router.replace("/auth/signin");
    } catch (e) {
      if (axios.isAxiosError(e)) {
        if (e.request?.status === 406) {
          setIsLoading(false);
          error(
            "비밀번호는 영문 대문자 혹은 소문자 중 하나 그리고 숫자를 조합시켜주세요"
          );
        }
        if (e.request?.status === 405) {
          setIsLoading(false);
          error("비밀번호 변경에 실패했습니다. 새로고침 후 다시 시도해주세요");
        }
        if (e.request?.status === 403) {
          setIsLoading(false);
          error("최근에 사용한 비밀번호입니다.");
        }
      }

      setIsLoading(false);
    }
  };

  return { isLoading, onSubmit };
}
