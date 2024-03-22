import type { Meta, StoryObj } from "@storybook/react";

import ModalFrame from ".";

const meta: Meta<typeof ModalFrame> = {
  component: ModalFrame,
  tags: ["autodocs"],
  title: "Molecules/ModalFrame",
};

export default meta;
type Story = StoryObj<typeof ModalFrame>;

export const Primary: Story = {
  args: {
    title: "Hello",
  },
};
