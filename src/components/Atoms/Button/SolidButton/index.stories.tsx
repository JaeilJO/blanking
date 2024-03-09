import type { Meta, StoryObj } from "@storybook/react";

import SolidButton from ".";

const meta: Meta<typeof SolidButton> = {
  component: SolidButton,
  tags: ["autodocs"],
  title: "Atoms/Button/SolidButton",
};

export default meta;
type Story = StoryObj<typeof SolidButton>;

export const Custom: Story = {
  args: {
    children: "Solid Button",
  },
};

export const Theme: Story = {
  render: () => (
    <div>
      <SolidButton theme="primary">Primary</SolidButton>
      <SolidButton theme="gray">Gray</SolidButton>
      <SolidButton theme="black">Black</SolidButton>
      <SolidButton theme="light-gray">Light Gray</SolidButton>
      <SolidButton theme="red">Red</SolidButton>
      <SolidButton theme="yellow">Yellow</SolidButton>
      <SolidButton theme="green">Green</SolidButton>
      <SolidButton theme="white">White</SolidButton>
    </div>
  ),
};
