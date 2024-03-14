import type { Meta, StoryObj } from "@storybook/react";

import CircleLink from ".";

const meta: Meta<typeof CircleLink> = {
  component: CircleLink,
  title: "Atoms/Link/CircleLink",
};

export default meta;
type Story = StoryObj<typeof CircleLink>;

export const Primary: Story = {
  args: { href: "/", size: 20, theme: "primary" },
};
