import type { Meta, StoryObj } from "@storybook/react";

import OutLineButton from ".";

const meta: Meta<typeof OutLineButton> = {
  component: OutLineButton,
  tags: ["autodocs"],
  title: "Atoms/Button/OutLineButton",
};

export default meta;
type Story = StoryObj<typeof OutLineButton>;

export const Custom: Story = {
  args: {
    children: "Line Button",
  },
};

export const Theme: Story = {
  render: () => (
    <div>
      <OutLineButton
        theme="primary"
        marginBottom="mb-3"
        borderWidth="border-medium"
      >
        Primary
      </OutLineButton>
      <OutLineButton
        theme="gray"
        marginBottom="mb-3"
        borderWidth="border-medium"
      >
        Gray
      </OutLineButton>
      <OutLineButton
        theme="black"
        marginBottom="mb-3"
        borderWidth="border-medium"
      >
        Black
      </OutLineButton>
      <OutLineButton
        theme="light-gray"
        marginBottom="mb-3"
        borderWidth="border-medium"
      >
        Light Gray
      </OutLineButton>
      <OutLineButton
        theme="red"
        marginBottom="mb-3"
        borderWidth="border-medium"
      >
        Red
      </OutLineButton>
      <OutLineButton
        theme="yellow"
        marginBottom="mb-3"
        borderWidth="border-medium"
      >
        Yellow
      </OutLineButton>
      <OutLineButton
        theme="green"
        marginBottom="mb-3"
        borderWidth="border-medium"
      >
        Green
      </OutLineButton>
      <OutLineButton
        theme="white"
        marginBottom="mb-3"
        borderWidth="border-medium"
      >
        White
      </OutLineButton>
    </div>
  ),
};
