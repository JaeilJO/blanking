import type { Meta, StoryObj } from "@storybook/react";

import GroupTitleButton from ".";

const meta: Meta<typeof GroupTitleButton> = {
  component: GroupTitleButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof GroupTitleButton>;

export const Primary: Story = {
  args: {
    groupname: "GroupName",
    currentGroupName: "CurrentGroupName",
    pages: [],
  },
};
