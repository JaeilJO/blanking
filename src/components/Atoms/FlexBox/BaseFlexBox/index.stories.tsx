import type { Meta, StoryObj } from "@storybook/react";

import BaseFlexBox from ".";

const meta: Meta<typeof BaseFlexBox> = {
  component: BaseFlexBox,
  title: "Atoms/FlexBox/BaseFlexBox",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BaseFlexBox>;

export const Custom: Story = {
  args: {
    children: (
      <>
        <div style={{ border: "1px solid red" }}>Hello</div>
        <div style={{ border: "1px solid red" }}>Hello</div>
        <div style={{ border: "1px solid red" }}>Hello</div>
        <div style={{ border: "1px solid red" }}>Hello</div>
        <div style={{ border: "1px solid red" }}>Hello</div>
        <div style={{ border: "1px solid red" }}>Hello</div>
      </>
    ),
  },
};

export const Primary: Story = {
  render: () => (
    <BaseFlexBox flexDirection="flex-row">
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
    </BaseFlexBox>
  ),
};
export const Column: Story = {
  render: () => (
    <BaseFlexBox flexDirection="flex-column">
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
    </BaseFlexBox>
  ),
};
