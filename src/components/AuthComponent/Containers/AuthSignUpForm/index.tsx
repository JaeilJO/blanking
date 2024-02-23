"use client";

import AuthButton from "../../Atoms/AuthButton";
import AuthInput from "../../Atoms/AuthInput";
import AuthForm from "../../Atoms/AuthForm";
import { CiUser } from "react-icons/ci";
import useForm from "@/hooks/useForm";
import useSignUp from "./logic/useSignUp";

function AuthSignUpForm() {
  const { onSubmit, isLoading } = useSignUp();
  const { register, handleSubmit } = useForm({
    name: "",
    email: "",
    password: "",
  });

  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)}>
      <AuthInput
        {...register("name")}
        type="text"
        name="name"
        placeholder="Name"
        disabled={isLoading}
      />
      <AuthInput
        {...register("email")}
        type="email"
        name="email"
        placeholder="E-mail"
        disabled={isLoading}
      />
      <AuthInput
        {...register("password")}
        type="password"
        name="password"
        placeholder="Password"
        disabled={isLoading}
      />
      <AuthButton type="submit" value="Sign Up" icon={<CiUser />} />
    </AuthForm>
  );
}
export default AuthSignUpForm;
