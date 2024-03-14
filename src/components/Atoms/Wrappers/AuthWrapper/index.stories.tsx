import type { Meta, StoryObj } from "@storybook/react";

import AuthWrapper from ".";

const meta: Meta<typeof AuthWrapper> = {
  component: AuthWrapper,
  title: "Wrapper/AuthWrapper",
};

export default meta;
type Story = StoryObj<typeof AuthWrapper>;

export const Primary: Story = {
  args: {
    children: "red",
  },
};
