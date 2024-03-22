import type { Meta, StoryObj } from "@storybook/react";

import Avatar from ".";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ["autodocs"],
  title: "Atoms/Avatar/Avatar",
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Custom: Story = {
  args: {
    name: "Custom",
  },
};

export const Size: Story = {
  render: () => (
    <div>
      <Avatar name="Samll" size={"small"} />
      <Avatar name="Medium" size={"medium"} />
      <Avatar name="Large" size={"large"} />
    </div>
  ),
};
