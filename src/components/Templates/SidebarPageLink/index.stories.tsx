import type { Meta, StoryObj } from "@storybook/react";

import SidebarPageLink from ".";

const meta: Meta<typeof SidebarPageLink> = {
  component: SidebarPageLink,
  title: "Templates/SidebarPageLink",
};

export default meta;
type Story = StoryObj<typeof SidebarPageLink>;

export const Primary: Story = {
  args: {
    groupname: "Group Name",
    pagename: "Page Name",
  },
};
