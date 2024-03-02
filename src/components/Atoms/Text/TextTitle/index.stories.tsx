import type { Meta, StoryObj } from "@storybook/react";

import TextTitle from ".";

const meta: Meta<typeof TextTitle> = {
  component: TextTitle,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextTitle>;

export const Primary: Story = {
  args: {
    children: "Title",
    block: true,
  },
};

export const Inline: Story = {
  args: {
    children: "Title",
    block: false,
  },
};

export const Warn: Story = {
  args: {
    children: "Title",
    theme: "warn",
  },
};

export const LightGray: Story = {
  args: {
    children: "Title",
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
