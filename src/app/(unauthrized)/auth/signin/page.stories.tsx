import type { Meta, StoryObj } from "@storybook/react";

import Page from "./page";

const meta: Meta<typeof Page> = {
  component: Page,
  title: "Page/Signin",
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Primary: Story = {
  render: () => (
    <div style={{ width: "100dvw", height: "100dvh" }}>
      <Page />
    </div>
  ),
};
