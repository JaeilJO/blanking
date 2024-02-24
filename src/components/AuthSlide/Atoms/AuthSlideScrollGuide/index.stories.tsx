import type { Meta, StoryObj } from "@storybook/react";

import AuthSlideScrollGuide from ".";

const meta: Meta<typeof AuthSlideScrollGuide> = {
  component: AuthSlideScrollGuide,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AuthSlideScrollGuide>;

export const Primary: Story = {
  render: () => (
    <div
      style={{
        position: "relative",
        width: "100%",
        border: "1px solid black",
        height: "300px",
      }}
    >
      <AuthSlideScrollGuide />
    </div>
  ),
};
