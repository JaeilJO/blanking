import type { Meta, StoryObj } from "@storybook/react";

import BaseButton from ".";

const meta: Meta<typeof BaseButton> = {
  component: BaseButton,
  title: "Atoms/Button/BaseButton",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BaseButton>;

export const Custom: Story = {
  args: {
    children: "Background",
    backgroundColor: "bg-primary",
    textColor: "text-white",
  },
};

export const Disabled: Story = {
  args: {
    children: "Background",
    backgroundColor: "bg-primary",
    textColor: "text-white",
    disabled: true,
  },
};
