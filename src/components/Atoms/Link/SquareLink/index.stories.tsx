import type { Meta, StoryObj } from "@storybook/react";

import SquareLink from ".";
import { BsGoogle } from "react-icons/bs";

const meta: Meta<typeof SquareLink> = {
  component: SquareLink,
  title: "Atoms/Link/SquareLink",
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
type Story = StoryObj<typeof SquareLink>;

export const Primary: Story = {
  args: {
    children: <BsGoogle />,
    href: "/",
    size: 30,
    color: "red",
  },
};

export const String: Story = {
  args: {
    children: "hey",
    href: "/",
  },
};
