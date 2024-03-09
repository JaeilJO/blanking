import type { Meta, StoryObj } from "@storybook/react";

import BaseLink from ".";

const meta: Meta<typeof BaseLink> = {
  component: BaseLink,
};

export default meta;
type Story = StoryObj<typeof BaseLink>;

export const Primary: Story = {
  args: {
    href: "/",
    children: "Base Link",
  },
};
