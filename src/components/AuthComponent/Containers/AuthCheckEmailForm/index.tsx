import { MdOutlineMail } from "react-icons/md";
import AuthButton from "../../Atoms/AuthButton";
import AuthInput from "../../Atoms/AuthInput";
import AuthForm from "../../Atoms/AuthForm";
import useForm from "@/hooks/useForm";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAlertStore } from "@/zustand/alertStore";
import useIsLoading from "@/hooks/useIsLoading";
import { useState } from "react";

function AuthCheckEmailForm() {
  const router = useRouter();
  const { error, success, loading } = useAlertStore((state) => state);

  const { isLoading, setIsLoading } = useIsLoading(
    "Email 확인중입니다.",
    loading
  );

  const [subkey, setSubkey] = useState("");
  const { register, handleSubmit } = useForm({
    email: "",
  });

  const onSubmit = async (data: { [key: string]: string }) => {
    setIsLoading(true);

    try {
      const user = await axios.get(`/api/checkEmail/${data.email}`);
      const userSubkey = user.data.subkey;

      setIsLoading(false);
      setSubkey(userSubkey);
      router.replace(`/auth/checkemail/${userSubkey}`);
    } catch (e) {
      setIsLoading(false);
      error("이메일이 존재하지 않습니다");
    }
  };

  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)}>
      <AuthInput
        {...register("email")}
        type="email"
        name="email"
        placeholder="E-mail"
        disabled={isLoading}
      />
      <AuthButton
        type="submit"
        value="Email 확인 하기"
        icon={<MdOutlineMail />}
        disabled={isLoading}
      />
    </AuthForm>
  );
}

export default AuthCheckEmailForm;
