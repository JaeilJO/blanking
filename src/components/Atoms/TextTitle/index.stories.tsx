import type { Meta, StoryObj } from "@storybook/react";

import TextTitle from ".";

const meta: Meta<typeof TextTitle> = {
  component: TextTitle,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextTitle>;

export const Primary: Story = {
  args: {
    children: "Title",
  },
};
