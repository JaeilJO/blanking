import { useAlertStore } from "@/zustand/alertStore";
import { useRouter } from "next/navigation";

import chekcEmail from "@/services/checkEamil";

export default function useCheckEmail() {
  const router = useRouter();

  const { success, error, loading } = useAlertStore((state) => state);

  const onSubmit = async (data: { [key: string]: string }) => {
    try {
      loading("이메일을 확인 중 입니다.");

      const user = await chekcEmail({ email: data.email });
      const userSubkey = user.data.subkey;

      success("이메일이 확인되었습니다. 다음 단계를 진행해주세요.");

      router.replace(`/auth/checkemail/${userSubkey}`);
    } catch (e) {
      error("이메일이 존재하지 않습니다, 이메일을 확인해 주세요");
    }
  };

  return { onSubmit };
}
