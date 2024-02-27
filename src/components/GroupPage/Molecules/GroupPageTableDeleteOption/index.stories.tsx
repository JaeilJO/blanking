import type { Meta, StoryObj } from "@storybook/react";

import GroupPageTableDeleteOption from ".";

const meta: Meta<typeof GroupPageTableDeleteOption> = {
  component: GroupPageTableDeleteOption,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof GroupPageTableDeleteOption>;

export const Primary: Story = {
  args: {},
};
