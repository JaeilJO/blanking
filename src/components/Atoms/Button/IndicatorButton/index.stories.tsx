import type { Meta, StoryObj } from "@storybook/react";

import IndocatorButton from ".";

const meta: Meta<typeof IndocatorButton> = {
  component: IndocatorButton,
  title: "Atoms/Button/IndicatorButton",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof IndocatorButton>;

export const Custom: Story = {
  args: {},
};
