import type { Meta, StoryObj } from "@storybook/react";

import TextBody from ".";

const meta: Meta<typeof TextBody> = {
  component: TextBody,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextBody>;

export const Primary: Story = {
  args: {
    children: "Body",
    block: true,
  },
};

export const Inline: Story = {
  args: {
    children: "Body",
    block: false,
  },
};

export const Warn: Story = {
  args: {
    children: "Body",
    theme: "warn",
  },
};

export const LightGray: Story = {
  args: {
    children: "Body",
    theme: "light-gray",
  },
};

export const NoDrag: Story = {
  args: {
    children: "No Drag",
    theme: "default",
    noDrag: true,
  },
};
