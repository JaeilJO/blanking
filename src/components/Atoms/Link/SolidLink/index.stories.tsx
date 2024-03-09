import type { Meta, StoryObj } from "@storybook/react";

import SolidLink from ".";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof SolidLink> = {
  component: SolidLink,
  tags: ["autodocs"],
  title: "Atoms/Link/SolidLink",
};

export default meta;
type Story = StoryObj<typeof SolidLink>;

export const Custom: Story = {
  args: {
    children: "Solid Link",
    href: "/",
  },
};

export const Theme: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px" }}>
      <SolidLink theme="primary" href="/">
        Primary
      </SolidLink>
      <SolidLink theme="gray" href="/">
        Gray
      </SolidLink>
      <SolidLink theme="black" href="/">
        Black
      </SolidLink>
      <SolidLink theme="light-gray" href="/">
        Light Gray
      </SolidLink>
      <SolidLink theme="red" href="/">
        Red
      </SolidLink>
      <SolidLink theme="yellow" href="/">
        Yellow
      </SolidLink>
      <SolidLink theme="green" href="/">
        Green
      </SolidLink>
      <SolidLink theme="white" href="/">
        White
      </SolidLink>
    </div>
  ),
};
