"use client";

// Utils
import useForm from "@/hooks/useForm";
import { signIn } from "next-auth/react";
import { useAlertStore } from "@/zustand/alertStore";
import { useRouter } from "next/navigation";
import useIsLoading from "@/hooks/useIsLoading";

// Components
import AuthButton from "../../Atoms/AuthButton";
import AuthInput from "../../Atoms/AuthInput";
import AuthForm from "../../Atoms/AuthForm";

// Icons
import { FaSignInAlt } from "react-icons/fa";

function AuthSignInForm() {
  const router = useRouter();
  const { error, success, loading } = useAlertStore((state) => state);
  const { isLoading, setIsLoading } = useIsLoading("로그인 중입니다", loading);

  const { register, handleSubmit } = useForm({
    email: "",
    password: "",
  });

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

  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)}>
      <AuthInput
        {...register("email")}
        type="email"
        name="email"
        disabled={isLoading}
        placeholder="E-mail"
      />
      <AuthInput
        {...register("password")}
        type="password"
        name="password"
        disabled={isLoading}
        placeholder="Password"
      />
      <AuthButton
        type="submit"
        value="Sign In"
        icon={<FaSignInAlt />}
        disabled={isLoading}
      />
    </AuthForm>
  );
}

export default AuthSignInForm;
