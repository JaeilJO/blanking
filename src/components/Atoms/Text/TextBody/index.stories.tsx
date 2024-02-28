import type { Meta, StoryObj } from "@storybook/react";

import TextBody from ".";

const meta: Meta<typeof TextBody> = {
  component: TextBody,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextBody>;

export const Primary: Story = {
  args: {
    children: "Body",
  },
};
