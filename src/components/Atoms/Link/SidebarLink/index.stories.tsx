import type { Meta, StoryObj } from "@storybook/react";

import SidebarItem from ".";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const meta: Meta<typeof SidebarItem> = {
  component: SidebarItem,
  title: "Atoms/Link/SidebarItem",
};

export default meta;
type Story = StoryObj<typeof SidebarItem>;

export const Primary: Story = {
  args: {
    href: "/",
    openIcon: <BsEye />,
    closeIcon: <BsEyeSlash />,
  },
};
