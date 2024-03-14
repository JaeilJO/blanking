import type { Meta, StoryObj } from "@storybook/react";

import ModalWrapper from ".";

const meta: Meta<typeof ModalWrapper> = {
  component: ModalWrapper,
  title: "Atoms/Wrappers/ModalWrapper",
};

export default meta;
type Story = StoryObj<typeof ModalWrapper>;

export const Primary: Story = {
  args: {},
};
