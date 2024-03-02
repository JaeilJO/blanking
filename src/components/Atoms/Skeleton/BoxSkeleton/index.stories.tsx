import type { Meta, StoryObj } from "@storybook/react";

import BoxSkeleton from ".";

const meta: Meta<typeof BoxSkeleton> = {
  component: BoxSkeleton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BoxSkeleton>;

export const Primary: Story = {
  args: {},
};
