"use client";

// Utils
import useForm from "@/hooks/useForm";
import useChangePassword from "@/components/AuthComponent/Organisms/AuthChangePasswordForm/logic/useChangePassword";

// Components
import AuthButton from "../../Atoms/AuthButton";
import AuthInput from "../../Atoms/AuthInput";
import AuthForm from "../../Atoms/AuthForm";

// Icons
import { IoKeyOutline } from "react-icons/io5";

function AuthChangePasswordForm({ subkey }: { subkey: string }) {
  const { isLoading, onSubmit } = useChangePassword({ subkey });

  const { register, handleSubmit } = useForm({
    password: "",
  });

  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)}>
      <AuthInput
        {...register("password")}
        type="password"
        name="password"
        placeholder="Password"
        disabled={isLoading}
      />
      <AuthButton
        type="submit"
        value="Password 변경 하기"
        icon={<IoKeyOutline />}
        disabled={isLoading}
      />
    </AuthForm>
  );
}

export default AuthChangePasswordForm;
