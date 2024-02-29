import type { Meta, StoryObj } from "@storybook/react";

import TextSubTitle from ".";

const meta: Meta<typeof TextSubTitle> = {
  component: TextSubTitle,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextSubTitle>;

export const Primary: Story = {
  args: {
    children: "SubTitle",
    block: true,
  },
};

export const Inline: Story = {
  args: {
    children: "SubTitle",
    block: false,
  },
};

export const Warn: Story = {
  args: {
    children: "SubTitle",
    theme: "warn",
  },
};

export const LightGray: Story = {
  args: {
    children: "SubTitle",
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
