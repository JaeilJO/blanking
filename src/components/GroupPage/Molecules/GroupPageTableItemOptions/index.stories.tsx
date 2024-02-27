import type { Meta, StoryObj } from "@storybook/react";

import GroupPageTableItemOptions from ".";

const meta: Meta<typeof GroupPageTableItemOptions> = {
  component: GroupPageTableItemOptions,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof GroupPageTableItemOptions>;

export const Primary: Story = {
  args: {
    pagename: "Pagename",
    groupname: "Group name",
  },
};
