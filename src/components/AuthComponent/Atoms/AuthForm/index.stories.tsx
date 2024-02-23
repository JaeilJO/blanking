import type { Meta, StoryObj } from "@storybook/react";

import AuthForm from ".";
import AuthInput from "../AuthInput";
import AuthButton from "../AuthButton";

const meta: Meta<typeof AuthForm> = {
  component: AuthForm,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AuthForm>;

export const Primary: Story = {
  render: () => (
    <AuthForm onSubmit={() => {}}>
      <AuthInput name={"example"} type={"text"} />
      <AuthInput name={"example"} type={"text"} />
      <AuthInput name={"example"} type={"text"} />
      <AuthButton value="Example" type="button" />
    </AuthForm>
  ),
};
