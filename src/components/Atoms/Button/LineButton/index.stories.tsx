import type { Meta, StoryObj } from "@storybook/react";

import LineButton from ".";

const meta: Meta<typeof LineButton> = {
  component: LineButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LineButton>;

export const Custom: Story = {
  args: {
    children: "LineButton",
  },
};

export const Theme: Story = {
  render: () => (
    <div>
      <LineButton
        theme="primary"
        marginBottom="mb-3"
        borderWidth="border-thick"
      >
        Primary
      </LineButton>
      <LineButton theme="gray" marginBottom="mb-3">
        Gray
      </LineButton>
      <LineButton theme="black" marginBottom="mb-3">
        Black
      </LineButton>
      <LineButton theme="light-gray" marginBottom="mb-3">
        Light Gray
      </LineButton>
      <LineButton theme="red" marginBottom="mb-3">
        Red
      </LineButton>
      <LineButton theme="yellow" marginBottom="mb-3">
        Yellow
      </LineButton>
      <LineButton theme="green" marginBottom="mb-3">
        Green
      </LineButton>
      <LineButton theme="white" marginBottom="mb-3">
        White
      </LineButton>
    </div>
  ),
};
