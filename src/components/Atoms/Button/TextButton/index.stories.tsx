import type { Meta, StoryObj } from "@storybook/react";

import TextButton from ".";

const meta: Meta<typeof TextButton> = {
  component: TextButton,
  tags: ["autodocs"],
  title: "Atoms/Button/TextButton",
};

export default meta;
type Story = StoryObj<typeof TextButton>;

export const Custom: Story = {
  args: {
    children: "TextButton",
  },
};

export const Theme: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px" }}>
      <TextButton theme="primary">Primary</TextButton>
      <TextButton theme="gray">Gray</TextButton>
      <TextButton theme="black">Black</TextButton>
      <TextButton theme="light-gray">Light Gray</TextButton>
      <TextButton theme="red">Red</TextButton>
      <TextButton theme="yellow">Yellow</TextButton>
      <TextButton theme="green">Green</TextButton>
      <TextButton theme="white">White</TextButton>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <>
      <TextButton disabled>Disabled</TextButton>
    </>
  ),
};
