import type { Meta, StoryObj } from "@storybook/react";

import SidebarTitleButton from ".";

const meta: Meta<typeof SidebarTitleButton> = {
  component: SidebarTitleButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SidebarTitleButton>;

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
