import type { Meta, StoryObj } from "@storybook/react";

import TextLink from ".";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof TextLink> = {
  component: TextLink,
  tags: ["autodocs"],
  title: "Atoms/Link/TextLink",
};

export default meta;
type Story = StoryObj<typeof TextLink>;

export const Custom: Story = {
  args: {
    children: "TextLink",
    href: "/",
  },
};

export const Theme: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px" }}>
      <TextLink theme="primary" href="/">
        Primary
      </TextLink>
      <TextLink theme="gray" href="/">
        Gray
      </TextLink>
      <TextLink theme="black" href="/">
        Black
      </TextLink>
      <TextLink theme="light-gray" href="/">
        Light Gray
      </TextLink>
      <TextLink theme="red" href="/">
        Red
      </TextLink>
      <TextLink theme="yellow" href="/">
        Yellow
      </TextLink>
      <TextLink theme="green" href="/">
        Green
      </TextLink>
      <TextLink theme="white" href="/">
        White
      </TextLink>
    </div>
  ),
};
