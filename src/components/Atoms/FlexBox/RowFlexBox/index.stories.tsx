import type { Meta, StoryObj } from "@storybook/react";

import RowFlexBox from ".";
import Button from "../../Button";

const meta: Meta<typeof RowFlexBox> = {
  component: RowFlexBox,
  title: "ATOMS/FlexBox/RowFlexBox",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RowFlexBox>;

export const Custom: Story = {
  args: {
    backgroundColor: "yellow",
    children: (
      <>
        <div>Hell</div>
        <div>Hell</div>
        <div>Hell</div>
      </>
    ),
  },
};
