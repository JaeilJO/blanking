import type { Meta, StoryObj } from "@storybook/react";

import PageCardOptionLink from ".";

const meta: Meta<typeof PageCardOptionLink> = {
  component: PageCardOptionLink,
  tags: ["autodocs"],
  title: "Molecules/PageCardOptionLink",
};

export default meta;
type Story = StoryObj<typeof PageCardOptionLink>;

export const Custom: Story = {
  args: {
    href: "/",
  },
};
