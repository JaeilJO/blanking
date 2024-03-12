"use client";

import UserInfoForm from "@/components/Organisms/UserInfoForm";
import useSignUp from "../../../hooks/useSignUp.hook";

function UserSignUpForm() {
  const { onSubmit } = useSignUp();
  return (
    <UserInfoForm>
      <UserInfoForm.Form onSubmit={onSubmit} gap="gap-4">
        <UserInfoForm.Input.Text name="name" placeholder="Name" required />

        <UserInfoForm.Input.Text
          type="email"
          name="email"
          placeholder="E-mail"
          required
        />

        <UserInfoForm.Input.Password
          name="password"
          placeholder="Password"
          required
        />

        <UserInfoForm.SubmitButton>Sign Up</UserInfoForm.SubmitButton>
      </UserInfoForm.Form>
    </UserInfoForm>
  );
}

export default UserSignUpForm;
