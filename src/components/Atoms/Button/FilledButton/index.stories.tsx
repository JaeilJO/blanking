import type { Meta, StoryObj } from "@storybook/react";

import FilledButton from ".";

const meta: Meta<typeof FilledButton> = {
  component: FilledButton,
  tags: ["autodocs"],
  title: "Atoms/Button/FilledButton",
};

export default meta;
type Story = StoryObj<typeof FilledButton>;

export const Custom: Story = {
  args: {
    children: "Solid Button",
  },
};

export const Theme: Story = {
  render: () => (
    <div>
      <FilledButton marginBottom="mb-3" theme="primary">
        Primary
      </FilledButton>
      <FilledButton marginBottom="mb-3" theme="gray">
        Gray
      </FilledButton>
      <FilledButton marginBottom="mb-3" theme="black">
        Black
      </FilledButton>
      <FilledButton marginBottom="mb-3" theme="light-gray">
        Light Gray
      </FilledButton>
      <FilledButton marginBottom="mb-3" theme="red">
        Red
      </FilledButton>
      <FilledButton marginBottom="mb-3" theme="yellow">
        Yellow
      </FilledButton>
      <FilledButton marginBottom="mb-3" theme="green">
        Green
      </FilledButton>
      <FilledButton marginBottom="mb-3" theme="white">
        White
      </FilledButton>
    </div>
  ),
};
export const Disabled: Story = {
  render: () => (
    <FilledButton marginBottom="mb-3" theme="primary" disabled>
      Primary
    </FilledButton>
  ),
};
