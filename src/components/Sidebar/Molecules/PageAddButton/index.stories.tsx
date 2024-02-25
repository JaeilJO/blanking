import type { Meta, StoryObj } from "@storybook/react";

import PageAddButton from ".";

const meta: Meta<typeof PageAddButton> = {
  component: PageAddButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PageAddButton>;

export const Primary: Story = {
  args: {},
};
