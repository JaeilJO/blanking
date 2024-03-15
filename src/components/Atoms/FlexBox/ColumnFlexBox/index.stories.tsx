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
        <Button.OutLine theme="primary">Hello</Button.OutLine>
        <Button.OutLine theme="primary">Hello</Button.OutLine>
        <Button.OutLine theme="primary">Hello</Button.OutLine>
      </>
    ),
  },
};
