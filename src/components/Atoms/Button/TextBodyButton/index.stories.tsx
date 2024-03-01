import type { Meta, StoryObj } from "@storybook/react";

import TextBodyButton from ".";

const meta: Meta<typeof TextBodyButton> = {
  component: TextBodyButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextBodyButton>;

export const Primary: Story = {
  args: {
    children: "Body",
  },
};
