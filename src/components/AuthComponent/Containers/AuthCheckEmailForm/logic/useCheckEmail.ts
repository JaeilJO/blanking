import { useAlertStore } from "@/zustand/alertStore";
import { useRouter } from "next/navigation";

import useIsLoading from "../../../../../hooks/useIsLoading";
import chekcEmail from "@/services/checkEamil";

export default function useCheckEmail() {
  const router = useRouter();
  const { error, loading } = useAlertStore((state) => state);

  const { isLoading, setIsLoading } = useIsLoading(
    "Email 확인중입니다.",
    loading
  );

  const onSubmit = async (data: { [key: string]: string }) => {
    setIsLoading(true);

    try {
      const user = await chekcEmail({ email: data.email });
      const userSubkey = user.data.subkey;

      setIsLoading(false);

      router.replace(`/auth/checkemail/${userSubkey}`);
    } catch (e) {
      setIsLoading(false);
      error("이메일이 존재하지 않습니다");
    }
  };

  return { isLoading, onSubmit };
}
