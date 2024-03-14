import type { Meta, StoryObj } from "@storybook/react";

import SidebarGroupLink from ".";

const meta: Meta<typeof SidebarGroupLink> = {
  component: SidebarGroupLink,
  title: "Templates/SidebarGroupLink",
};

export default meta;
type Story = StoryObj<typeof SidebarGroupLink>;

export const Primary: Story = {
  args: {
    groupname: "Group Name",
  },
};
