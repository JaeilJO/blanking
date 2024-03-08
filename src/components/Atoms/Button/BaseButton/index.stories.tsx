import type { Meta, StoryObj } from "@storybook/react";

import BaseButton from ".";

const meta: Meta<typeof BaseButton> = {
  component: BaseButton,
};

export default meta;
type Story = StoryObj<typeof BaseButton>;

export const Custom: Story = {
  args: {
    children: "Background",
    backgroundColor: "bg-primary",
    fontColor: "text-white",
  },
};
