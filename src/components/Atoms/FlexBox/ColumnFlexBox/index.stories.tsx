import type { Meta, StoryObj } from "@storybook/react";

import RowFlexBox from ".";
import Button from "../../Button";

const meta: Meta<typeof RowFlexBox> = {
  component: RowFlexBox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RowFlexBox>;

export const Custom: Story = {
  args: {
    backgroundColor: "primary",
    children: (
      <>
        <Button.Line theme="primary">Hello</Button.Line>
        <Button.Line theme="primary">Hello</Button.Line>
        <Button.Line theme="primary">Hello</Button.Line>
      </>
    ),
  },
};
