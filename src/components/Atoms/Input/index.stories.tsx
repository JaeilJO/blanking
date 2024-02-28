import type { Meta, StoryObj } from "@storybook/react";

import Input from ".";

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    type: "text",
    name: "name",
    required: true,
    theme: "primary",
    onChange: () => {},
  },
};

export const Default: Story = {
  args: {
    type: "text",
    name: "name",
    required: true,
    theme: "default",
    onChange: () => {},
  },
};

export const Gray: Story = {
  args: {
    type: "text",
    name: "name",
    required: true,
    theme: "gray",
    onChange: () => {},
  },
};

export const Warn: Story = {
  args: {
    type: "text",
    name: "name",
    required: true,
    theme: "warn",
    onChange: () => {},
  },
};

export const Disabled: Story = {
  args: {
    type: "text",
    name: "name",
    disabled: true,
    required: true,
    theme: "default",
    onChange: () => {},
  },
};

export const Password: Story = {
  args: {
    type: "password",
    name: "password",
    required: true,
    theme: "default",
    onChange: () => {},
  },
};
