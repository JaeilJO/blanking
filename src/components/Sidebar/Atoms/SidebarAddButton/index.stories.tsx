import type { Meta, StoryObj } from "@storybook/react";

import SidebarAddButton from ".";

const meta: Meta<typeof SidebarAddButton> = {
  component: SidebarAddButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SidebarAddButton>;

export const Primary: Story = {
  args: {
    href: "",
    title: "Title",
    fontSize: "body-01",
  },
};

export const Body02: Story = {
  args: {
    href: "",
    title: "Title",
    fontSize: "body-02",
  },
};
