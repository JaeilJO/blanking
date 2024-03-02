import type { Meta, StoryObj } from "@storybook/react";

import FillButton from ".";

const meta: Meta<typeof FillButton> = {
  component: FillButton,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FillButton>;

export const Primary: Story = {
  args: {
    block: true,
    theme: "primary",
    children: "Hello",
  },
};

export const Default: Story = {
  args: {
    block: true,
    theme: "default",
    children: "Hello",
  },
};

export const Gray: Story = {
  args: {
    block: true,
    theme: "gray",
    children: "Hello",
  },
};

export const Warn: Story = {
  args: {
    block: true,
    theme: "warn",
    children: "Hello",
  },
};

export const Transparent: Story = {
  args: {
    block: true,
    theme: "transparent",
    children: "Hello",
  },
};

export const Square: Story = {
  args: {
    block: true,
    theme: "transparent",
    square: true,
    squareSize: 60,
    children: "Hello",
  },
};

export const Link: Story = {
  args: {
    block: true,
    theme: "transparent",
    type: "link",
    href: "/",
    children: "link",
  },
};

export const Disabled: Story = {
  args: {
    block: true,
    theme: "default",
    disabled: true,
    children: "Hello",
  },
};

export const Inline: Story = {
  args: {
    block: false,
    theme: "default",

    children: "Hello",
  },
};
