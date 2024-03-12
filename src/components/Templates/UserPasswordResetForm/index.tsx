"use client";
import UserInfoForm from "@/components/Organisms/UserInfoForm";
import useChangePassword from "../../../hooks/useChangePassword";

function UserPasswordResetForm({ subkey }: { subkey: string }) {
  const { onSubmit } = useChangePassword({ subkey: subkey });
  return (
    <UserInfoForm>
      <UserInfoForm.Form onSubmit={onSubmit} gap="gap-4">
        <UserInfoForm.Input.Password
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <UserInfoForm.SubmitButton>Change Password</UserInfoForm.SubmitButton>
      </UserInfoForm.Form>
    </UserInfoForm>
  );
}

export default UserPasswordResetForm;
