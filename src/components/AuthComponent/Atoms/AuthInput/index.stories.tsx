import type { Meta, StoryObj } from "@storybook/react";

import AuthInput from ".";

const meta: Meta<typeof AuthInput> = {
  component: AuthInput,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AuthInput>;

export const Primary: Story = {
  args: {
    placeholder: "E-mail",
    type: "email",
  },
};

export const Password: Story = {
  args: {
    placeholder: "Password",
    type: "password",
  },
};
