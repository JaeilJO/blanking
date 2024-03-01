import type { Meta, StoryObj } from "@storybook/react";

import InputWithLabel from ".";

const meta: Meta<typeof InputWithLabel> = {
  component: InputWithLabel,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InputWithLabel>;

export const Primary: Story = {
  args: {
    label: "Label",
    theme: "primary",
  },
};

export const Default: Story = {
  args: {
    label: "Label",
    theme: "default",
  },
};

export const gray: Story = {
  args: {
    label: "Label",
    theme: "gray",
  },
};
export const warn: Story = {
  args: {
    label: "Label",
    theme: "warn",
  },
};
