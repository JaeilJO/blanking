import type { Meta, StoryObj } from "@storybook/react";

import TitleWithSubTitle from ".";

const meta: Meta<typeof TitleWithSubTitle> = {
  component: TitleWithSubTitle,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TitleWithSubTitle>;

export const Primary: Story = {
  args: {
    title: "title",
    subtitle: "subtitle",
  },
};
