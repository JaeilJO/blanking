import type { Meta, StoryObj } from "@storybook/react";

import Avatar from ".";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    name: "Jaeil Jo",
  },
};
