import type { Meta, StoryObj } from "@storybook/react";

import SquareButton from ".";
import { BsGoogle } from "react-icons/bs";

const meta: Meta<typeof SquareButton> = {
  component: SquareButton,
  title: "Atoms/Button/SquareButton",
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
type Story = StoryObj<typeof SquareButton>;

export const Primary: Story = {
  args: {
    children: "hello",
    size: 60,
  },
};

export const Icon: Story = {
  args: {
    children: <BsGoogle />,
    color: "#4285F4",
    size: 40,
  },
};
