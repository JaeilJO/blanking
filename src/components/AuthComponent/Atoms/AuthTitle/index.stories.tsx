import type { Meta, StoryObj } from "@storybook/react";

import AuthTitle from ".";

const meta: Meta<typeof AuthTitle> = {
  component: AuthTitle,
};

export default meta;
type Story = StoryObj<typeof AuthTitle>;

export const Primary: Story = {
  args: {
    title: "Title",
    subtitle: "Sub Title",
  },
};
