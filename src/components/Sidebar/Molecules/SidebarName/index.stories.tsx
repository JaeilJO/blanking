import type { Meta, StoryObj } from "@storybook/react";

import SidebarName from ".";

const meta: Meta<typeof SidebarName> = {
  component: SidebarName,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SidebarName>;

export const Primary: Story = {
  args: {
    name: "Jaeil Jo",
    email: "whwodlf97@gmail.com",
  },
};
