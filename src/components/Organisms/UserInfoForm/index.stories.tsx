import type { Meta, StoryObj } from "@storybook/react";
import UserInfoForm from ".";

const meta = {
  title: "Templates/UserInfoForm",
};

export default meta;
type Story = StoryObj;

const onSubmit = () => {};

export const Primary: Story = {
  render: () => (
    <UserInfoForm>
      <UserInfoForm.Form onSubmit={onSubmit} gap="gap-3">
        <UserInfoForm.Input.Text name="email" required placeholder="E-mail" />
        <UserInfoForm.Input.Password
          name="password"
          required
          placeholder="Password"
        />
        <UserInfoForm.SubmitButton>Submit</UserInfoForm.SubmitButton>
      </UserInfoForm.Form>
    </UserInfoForm>
  ),
};
