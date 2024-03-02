import type { Meta, StoryObj } from "@storybook/react";

import AvatarWithLogoutLink from ".";

const meta: Meta<typeof AvatarWithLogoutLink> = {
  component: AvatarWithLogoutLink,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AvatarWithLogoutLink>;

export const Primary: Story = {
  args: {
    name: "John Doe",
    email: "wh@Hll",
  },
};
