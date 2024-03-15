import type { Meta, StoryObj } from "@storybook/react";

import ColumnFlexBox from ".";
import Button from "../../Button";

const meta: Meta<typeof ColumnFlexBox> = {
  component: ColumnFlexBox,
  title: "Atoms/FlexBox/ColumnFlexBox",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ColumnFlexBox>;

export const Custom: Story = {
  args: {
    backgroundColor: "bg-yellow",
    children: (
      <>
        <Button.OutLine theme="primary">Hello</Button.OutLine>
        <Button.OutLine theme="primary">Hello</Button.OutLine>
        <Button.OutLine theme="primary">Hello</Button.OutLine>
      </>
    ),
  },
};
