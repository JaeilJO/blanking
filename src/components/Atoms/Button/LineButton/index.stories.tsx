import type { Meta, StoryObj } from "@storybook/react";

import LineButton from ".";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof LineButton> = {
  component: LineButton,
};

export default meta;
type Story = StoryObj<typeof LineButton>;

export const FirstStory: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px" }}>
      <LineButton theme="primary">Primary</LineButton>
      <LineButton theme="gray">Gray</LineButton>
      <LineButton theme="black">Black</LineButton>
      <LineButton theme="light-gray">Light Gray</LineButton>
      <LineButton theme="red">Red</LineButton>
      <LineButton theme="yellow">Yellow</LineButton>
      <LineButton theme="green">Green</LineButton>
      <LineButton theme="white">White</LineButton>
    </div>
  ),
};
export const Block: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        height: "500px",
      }}
    >
      <LineButton display="block" theme="primary">
        Primary
      </LineButton>
      <LineButton display="block" theme="gray">
        Gray
      </LineButton>
      <LineButton display="block" theme="black">
        Black
      </LineButton>
      <LineButton display="block" theme="light-gray">
        Light Gray
      </LineButton>
      <LineButton display="block" theme="red">
        Red
      </LineButton>
      <LineButton display="block" theme="yellow">
        Yellow
      </LineButton>
      <LineButton display="block" theme="green">
        Green
      </LineButton>
      <LineButton display="block" theme="white">
        White
      </LineButton>
    </div>
  ),
};
export const FontSize: Story = {
  render: () => {
    return (
      <div>
        <LineButton fontSize="tit-01" theme="primary">
          tit-01
        </LineButton>
        <LineButton fontSize="tit-02" theme="primary">
          tit-02
        </LineButton>
        <LineButton fontSize="tit-03" theme="primary">
          tit-03
        </LineButton>
        <LineButton fontSize="sub-01" theme="primary">
          sub-01
        </LineButton>
        <LineButton fontSize="sub-02" theme="primary">
          sub-02
        </LineButton>
        <LineButton fontSize="body-01" theme="primary">
          body-01
        </LineButton>
        <LineButton fontSize="body-02" theme="primary">
          body-02
        </LineButton>
      </div>
    );
  },
};

export const BorderWidth: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
      <LineButton theme="primary" borderWidth="border-thin">
        Thin Border
      </LineButton>
      <LineButton theme="primary" borderWidth="border-medium">
        Medium Border
      </LineButton>
      <LineButton theme="primary" borderWidth="border-thick">
        Thick Border
      </LineButton>
    </div>
  ),
};
