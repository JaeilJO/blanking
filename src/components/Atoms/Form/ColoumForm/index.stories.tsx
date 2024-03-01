import type { Meta, StoryObj } from "@storybook/react";

import ColoumForm from ".";
import Input from "../../Input";
import Button from "../../Button";

const meta: Meta<typeof ColoumForm> = {
  component: ColoumForm,
  tags: ["autodocs"],
  argTypes: {
    gap: {
      controls: {
        type: "number",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ColoumForm>;

export const Primary: Story = {
  args: {
    gap: 10,
    children: (
      <>
        <Input.LineInput />
        <Input.LineInput />
        <Button.FillButton type="submit">Submit Button</Button.FillButton>
      </>
    ),
  },
};
