import { useAlertStore } from "@/zustand/alertStore";
import { signOut } from "next-auth/react";

import { useState } from "react";

export default function useLogout() {
  const [isLoading, setIsLoading] = useState(false);
  const { success, loading } = useAlertStore((state) => state);

  const signOutHandle = async () => {
    loading("로그아웃 중입니다.");
    setIsLoading(true);
    await signOut();
    success("로그아웃 되었습니다.");
  };

  return { isLoading, signOutHandle };
}
