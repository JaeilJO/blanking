import type { Meta, StoryObj } from "@storybook/react";

import FilledLink from ".";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof FilledLink> = {
  component: FilledLink,
  tags: ["autodocs"],
  title: "Atoms/Link/FilledLink",
};

export default meta;
type Story = StoryObj<typeof FilledLink>;

export const Custom: Story = {
  args: {
    children: "Solid Link",
    href: "/",
  },
};

export const Theme: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px" }}>
      <FilledLink theme="primary" href="/">
        Primary
      </FilledLink>
      <FilledLink theme="gray" href="/">
        Gray
      </FilledLink>
      <FilledLink theme="black" href="/">
        Black
      </FilledLink>
      <FilledLink theme="light-gray" href="/">
        Light Gray
      </FilledLink>
      <FilledLink theme="red" href="/">
        Red
      </FilledLink>
      <FilledLink theme="yellow" href="/">
        Yellow
      </FilledLink>
      <FilledLink theme="green" href="/">
        Green
      </FilledLink>
      <FilledLink theme="white" href="/">
        White
      </FilledLink>
    </div>
  ),
};
