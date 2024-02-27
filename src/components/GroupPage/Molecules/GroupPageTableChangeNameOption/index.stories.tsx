import type { Meta, StoryObj } from "@storybook/react";

import GroupPageTableChangeNameOption from ".";

const meta: Meta<typeof GroupPageTableChangeNameOption> = {
  component: GroupPageTableChangeNameOption,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof GroupPageTableChangeNameOption>;

export const Primary: Story = {
  args: {},
};
