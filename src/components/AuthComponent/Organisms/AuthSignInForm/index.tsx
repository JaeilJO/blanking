"use client";

// Utils
import useForm from "@/hooks/useForm";

// Components
import AuthButton from "../../Atoms/AuthButton";
import AuthInput from "../../Atoms/AuthInput";
import AuthForm from "../../Atoms/AuthForm";

// Icons
import { FaSignInAlt } from "react-icons/fa";
import useSignIn from "./logic/useSignIn";

function AuthSignInForm() {
  const { onSubmit, isLoading } = useSignIn();

  const { register, handleSubmit } = useForm({
    email: "",
    password: "",
  });

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
