import changePassword from "@/services/changePassword";
import { useAlertStore } from "@/zustand/alertStore";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";

interface useChangePasswordParasms {
  subkey: string;
}

export default function useChangePassword({
  subkey,
}: useChangePasswordParasms) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { error, success, loading } = useAlertStore((state) => state);

  const onSubmit = async (data: { [key: string]: string }) => {
    try {
      loading("비밀번호를 변경 중 입니다.");
      setIsLoading(true);
      await changePassword({ subkey, password: data.password });

      success("비밀번호 변경이 완료되었습니다. 다시 로그인을 시도해주세요");
      router.replace("/auth/signin");
    } catch (e) {
      if (axios.isAxiosError(e)) {
        setIsLoading(false);
        if (e.request?.status === 406) {
          error(
            "비밀번호는 영문 대문자 혹은 소문자 중 하나 그리고 숫자를 조합시켜주세요"
          );
        }
        if (e.request?.status === 405) {
          error("비밀번호 변경에 실패했습니다. 새로고침 후 다시 시도해주세요");
        }
        if (e.request?.status === 403) {
          error("최근에 사용한 비밀번호입니다.");
        }
      }
    }
  };

  return { isLoading, onSubmit };
}
