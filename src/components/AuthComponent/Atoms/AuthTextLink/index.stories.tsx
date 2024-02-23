import type { Meta, StoryObj } from "@storybook/react";

import AuthTextLink from ".";

const meta: Meta<typeof AuthTextLink> = {
  component: AuthTextLink,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AuthTextLink>;

export const Primary: Story = {
  args: {
    href: "/",
    text: "Primary",
  },
};
