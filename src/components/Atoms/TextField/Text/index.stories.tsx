import type { Meta, StoryObj } from "@storybook/react";

import TextFieldText from ".";

const meta: Meta<typeof TextFieldText> = {
  component: TextFieldText,
  title: "Atoms/TextField/Text",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextFieldText>;

export const Custom: Story = {
  args: {
    placeholder: "Custom",
    theme: "primary",
    type: "text",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Custom",
    disabled: true,
    theme: "primary",
  },
};
