import type { Meta, StoryObj } from "@storybook/react";

import GroupPageTableItemOptionLink from ".";
import { BsGoogle } from "react-icons/bs";

const meta: Meta<typeof GroupPageTableItemOptionLink> = {
  component: GroupPageTableItemOptionLink,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof GroupPageTableItemOptionLink>;

export const Primary: Story = {
  args: {
    href: "/",
    children: <BsGoogle />,
  },
};
