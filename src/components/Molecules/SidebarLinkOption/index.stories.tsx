import type { Meta, StoryObj } from "@storybook/react";

import SidebarLinkOption from ".";
import { BsGoogle } from "react-icons/bs";

const meta: Meta<typeof SidebarLinkOption> = {
  component: SidebarLinkOption,
  title: "Molecules/SidebarLinkOption",
};

export default meta;
type Story = StoryObj<typeof SidebarLinkOption>;

export const Primary: Story = {
  args: {
    href: "/",
    icon: <BsGoogle />,
  },
};
