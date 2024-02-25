import type { Meta, StoryObj } from "@storybook/react";

import SidebarStatusButton from ".";
import exp from "constants";

const meta: Meta<typeof SidebarStatusButton> = {
  component: SidebarStatusButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SidebarStatusButton>;

export const Primary: Story = {
  args: {
    status: true,
  },
};

export const Close: Story = {
  args: {
    status: false,
  },
};
