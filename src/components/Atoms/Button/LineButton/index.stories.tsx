import type { Meta, StoryObj } from "@storybook/react";

import LineButton from ".";

const meta: Meta<typeof LineButton> = {
  component: LineButton,
  tags: ["autodocs"],
  title: "Atoms/Button/LineButton",
};

export default meta;
type Story = StoryObj<typeof LineButton>;

export const Custom: Story = {
  args: {
    children: "Line Button",
  },
};

export const Theme: Story = {
  render: () => (
    <div>
      <LineButton
        theme="primary"
        marginBottom="mb-3"
        borderWidth="border-medium"
      >
        Primary
      </LineButton>
      <LineButton theme="gray" marginBottom="mb-3" borderWidth="border-medium">
        Gray
      </LineButton>
      <LineButton theme="black" marginBottom="mb-3" borderWidth="border-medium">
        Black
      </LineButton>
      <LineButton
        theme="light-gray"
        marginBottom="mb-3"
        borderWidth="border-medium"
      >
        Light Gray
      </LineButton>
      <LineButton theme="red" marginBottom="mb-3" borderWidth="border-medium">
        Red
      </LineButton>
      <LineButton
        theme="yellow"
        marginBottom="mb-3"
        borderWidth="border-medium"
      >
        Yellow
      </LineButton>
      <LineButton theme="green" marginBottom="mb-3" borderWidth="border-medium">
        Green
      </LineButton>
      <LineButton theme="white" marginBottom="mb-3" borderWidth="border-medium">
        White
      </LineButton>
    </div>
  ),
};
