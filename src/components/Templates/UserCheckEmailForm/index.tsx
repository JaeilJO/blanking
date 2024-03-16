"use client";

import UserInfoForm from "@/components/Organisms/UserInfoForm";
import React from "react";
import useCheckEmail from "../../../hooks/useCheckEmail.hook";

const UserCheckEmailForm: React.FC = () => {
  const { onSubmit } = useCheckEmail();

  return (
    <UserInfoForm>
      <UserInfoForm.Form onSubmit={onSubmit} gap="gap-4">
        <UserInfoForm.Input.Text
          name="email"
          type="email"
          placeholder="E-mail"
        />
        <UserInfoForm.SubmitButton>Check Email</UserInfoForm.SubmitButton>
      </UserInfoForm.Form>
    </UserInfoForm>
  );
};

export default UserCheckEmailForm;
