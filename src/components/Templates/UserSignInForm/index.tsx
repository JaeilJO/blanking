"use client";

import useSignIn from "../../../hooks/useSignIn.hook";
import UserInfoForm from "../../Organisms/UserInfoForm";

// UserSignInForm을 분리한 이유
// onSubmit이라는 Custom hook을 Page 단위에서 사용하면 Page 전체가 렌더링 될 수 있어서 분리함
function UserSignInForm() {
  const { onSubmit } = useSignIn();
  return (
    <UserInfoForm>
      <UserInfoForm.Form onSubmit={onSubmit} gap="gap-4">
        <UserInfoForm.Input.Text
          name="email"
          type="email"
          placeholder="E-mail"
          required
        />
        <UserInfoForm.Input.Password
          name="password"
          placeholder="Password"
          required
        />
        <UserInfoForm.SubmitButton>Sign In</UserInfoForm.SubmitButton>
      </UserInfoForm.Form>
    </UserInfoForm>
  );
}

export default UserSignInForm;
