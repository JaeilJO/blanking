import type { Meta, StoryObj } from "@storybook/react";

import AuthComponentSkeleton from ".";

const meta: Meta<typeof AuthComponentSkeleton> = {
  component: AuthComponentSkeleton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AuthComponentSkeleton>;

export const Primary: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: "800px", height: "1000px" }}>
        <Story />
      </div>
    ),
  ],
};
