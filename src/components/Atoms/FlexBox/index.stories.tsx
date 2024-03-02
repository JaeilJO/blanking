import type { Meta, StoryObj } from "@storybook/react";

import LineButton from ".";
import Input from "../Input";
import Button from "../Button";

const meta: Meta<typeof LineButton> = {
  component: LineButton,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: {
        type: "select",
        options: [],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LineButton>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <Input.LineInput />
        <Input.LineInput />
        <Button.FillButton type="submit">Hello</Button.FillButton>
      </>
    ),
  },
};
