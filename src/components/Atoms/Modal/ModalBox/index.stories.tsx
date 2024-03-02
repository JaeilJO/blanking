import type { Meta, StoryObj } from "@storybook/react";

import ModalBox from ".";

const meta: Meta<typeof ModalBox> = {
  component: ModalBox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ModalBox>;

export const Primary: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          width: "100dvw",
          height: "100dvh",
        }}
      >
        <Story />
      </div>
    ),
  ],
};
