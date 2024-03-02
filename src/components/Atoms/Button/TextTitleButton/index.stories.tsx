import type { Meta, StoryObj } from "@storybook/react";

import TextSubTitleButton from ".";

const meta: Meta<typeof TextSubTitleButton> = {
  component: TextSubTitleButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextSubTitleButton>;

export const Primary: Story = {
  args: {
    children: "Body",
  },
};
