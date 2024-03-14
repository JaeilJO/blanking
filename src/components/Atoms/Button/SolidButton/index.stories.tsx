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
      <SolidButton marginBottom="mb-3" theme="primary">
        Primary
      </SolidButton>
      <SolidButton marginBottom="mb-3" theme="gray">
        Gray
      </SolidButton>
      <SolidButton marginBottom="mb-3" theme="black">
        Black
      </SolidButton>
      <SolidButton marginBottom="mb-3" theme="light-gray">
        Light Gray
      </SolidButton>
      <SolidButton marginBottom="mb-3" theme="red">
        Red
      </SolidButton>
      <SolidButton marginBottom="mb-3" theme="yellow">
        Yellow
      </SolidButton>
      <SolidButton marginBottom="mb-3" theme="green">
        Green
      </SolidButton>
      <SolidButton marginBottom="mb-3" theme="white">
        White
      </SolidButton>
    </div>
  ),
};
