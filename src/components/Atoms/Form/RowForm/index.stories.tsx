import type { Meta, StoryObj } from "@storybook/react";

import RowForm from ".";
import Input from "../../Input";
import Button from "../../Button";

const meta: Meta<typeof RowForm> = {
  component: RowForm,
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
type Story = StoryObj<typeof RowForm>;

export const Primary: Story = {
  args: {
    gap: 4,
    children: (
      <>
        <Input.LineInput />
        <Input.LineInput />
        <Button.FillButton type="submit">Submit Button</Button.FillButton>
      </>
    ),
  },
};
