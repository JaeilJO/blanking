import type { Meta, StoryObj } from "@storybook/react";

import InputWithLabelPasswordInput from ".";

const meta: Meta<typeof InputWithLabelPasswordInput> = {
  component: InputWithLabelPasswordInput,
};

export default meta;
type Story = StoryObj<typeof InputWithLabelPasswordInput>;

export const Primary: Story = {
  args: {},
};
