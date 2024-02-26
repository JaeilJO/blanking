import type { Meta, StoryObj } from "@storybook/react";

import GroupMakerTitle from ".";

const meta: Meta<typeof GroupMakerTitle> = {
  component: GroupMakerTitle,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof GroupMakerTitle>;

export const Primary: Story = {
  args: {},
};
