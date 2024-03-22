import type { Meta, StoryObj } from "@storybook/react";

import SidebarUserInfo from ".";

const meta: Meta<typeof SidebarUserInfo> = {
  component: SidebarUserInfo,
  tags: ["autodocs"],
  title: "Molecules/SidebarUserInfo",
};

export default meta;
type Story = StoryObj<typeof SidebarUserInfo>;

export const Primary: Story = {
  args: {
    name: "Example",
    email: "Example@Example",
  },
};
