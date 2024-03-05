import type { Meta, StoryObj } from "@storybook/react";

import TextButton from ".";
import TextLink from ".";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof TextButton> = {
  component: TextButton,
};

export default meta;
type Story = StoryObj<typeof TextButton>;

export const FirstStory: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px" }}>
      <TextLink fontSize="body-01" theme="primary" href="/">
        Primary
      </TextLink>
      <TextLink fontSize="body-01" theme="gray" href="/">
        Gray
      </TextLink>
      <TextLink fontSize="body-01" theme="black" href="/">
        Black
      </TextLink>
      <TextLink fontSize="body-01" theme="light-gray" href="/">
        Light Gray
      </TextLink>
      <TextLink fontSize="body-01" theme="red" href="/">
        Red
      </TextLink>
      <TextLink fontSize="body-01" theme="yellow" href="/">
        Yellow
      </TextLink>
      <TextLink fontSize="body-01" theme="green" href="/">
        Green
      </TextLink>
      <TextLink fontSize="body-01" theme="white" href="/">
        White
      </TextLink>
    </div>
  ),
};
export const FontSize: Story = {
  render: () => {
    return (
      <>
        <TextLink fontSize="tit-01" theme="primary" href="/">
          tit-01
        </TextLink>
        <TextLink fontSize="tit-02" theme="primary" href="/">
          tit-02
        </TextLink>
        <TextLink fontSize="tit-03" theme="primary" href="/">
          tit-03
        </TextLink>
        <TextLink fontSize="sub-01" theme="primary" href="/">
          sub-01
        </TextLink>
        <TextLink fontSize="sub-02" theme="primary" href="/">
          sub-02
        </TextLink>
        <TextLink fontSize="body-01" theme="primary" href="/">
          body-01
        </TextLink>
        <TextLink fontSize="body-02" theme="primary" href="/">
          body-02
        </TextLink>
      </>
    );
  },
};
