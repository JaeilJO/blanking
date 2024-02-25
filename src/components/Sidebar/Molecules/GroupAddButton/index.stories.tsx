import type { Meta, StoryObj } from "@storybook/react";

import GroupAddButton from ".";

const meta: Meta<typeof GroupAddButton> = {
  component: GroupAddButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof GroupAddButton>;

export const Primary: Story = {};
