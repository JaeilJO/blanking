import type { Meta, StoryObj } from "@storybook/react";

import TextFieldPassword from ".";

const meta: Meta<typeof TextFieldPassword> = {
  component: TextFieldPassword,
  title: "Atoms/TextField/Password",
};

export default meta;
type Story = StoryObj<typeof TextFieldPassword>;

export const Custom: Story = {
  args: {
    theme: "primary",
  },
};

export const Disabled: Story = {
  args: {
    theme: "primary",
    disabled: true,
  },
};
