import type { Meta, StoryObj } from "@storybook/react";

import TextSubTitle from ".";

const meta: Meta<typeof TextSubTitle> = {
  component: TextSubTitle,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextSubTitle>;

export const Primary: Story = {
  args: {
    children: "Sub Title",
  },
};
