import type { Meta, StoryObj } from "@storybook/react";

import GroupPageTableItem from ".";

const meta: Meta<typeof GroupPageTableItem> = {
  component: GroupPageTableItem,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof GroupPageTableItem>;

export const Primary: Story = {
  args: {
    pagename: "Page name",
    groupname: "Group name",
  },
};
