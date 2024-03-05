import type { Meta, StoryObj } from "@storybook/react";

import SolidButton from ".";
import { BsGoogle } from "react-icons/bs";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof SolidButton> = {
  component: SolidButton,
};

export default meta;
type Story = StoryObj<typeof SolidButton>;

export const FirstStory: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px" }}>
      <SolidButton theme="primary">Primary</SolidButton>
      <SolidButton theme="gray">Gray</SolidButton>
      <SolidButton theme="black">Black</SolidButton>
      <SolidButton theme="light-gray">Light Gray</SolidButton>
      <SolidButton theme="red">Red</SolidButton>
      <SolidButton theme="yellow">Yellow</SolidButton>
      <SolidButton theme="green">Green</SolidButton>
      <SolidButton theme="white">White</SolidButton>
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
      <SolidButton display="block" theme="primary">
        Primary
      </SolidButton>
      <SolidButton display="block" theme="gray">
        Gray
      </SolidButton>
      <SolidButton display="block" theme="black">
        Black
      </SolidButton>
      <SolidButton display="block" theme="light-gray">
        Light Gray
      </SolidButton>
      <SolidButton display="block" theme="red">
        Red
      </SolidButton>
      <SolidButton display="block" theme="yellow">
        Yellow
      </SolidButton>
      <SolidButton display="block" theme="green">
        Green
      </SolidButton>
      <SolidButton display="block" theme="white">
        White
      </SolidButton>
    </div>
  ),
};
export const FontSize: Story = {
  render: () => {
    return (
      <div>
        <SolidButton fontSize="tit-01" theme="primary">
          tit-01
        </SolidButton>
        <SolidButton fontSize="tit-02" theme="primary">
          tit-02
        </SolidButton>
        <SolidButton fontSize="tit-03" theme="primary">
          tit-03
        </SolidButton>
        <SolidButton fontSize="sub-01" theme="primary">
          sub-01
        </SolidButton>
        <SolidButton fontSize="sub-02" theme="primary">
          sub-02
        </SolidButton>
        <SolidButton fontSize="body-01" theme="primary">
          body-01
        </SolidButton>
        <SolidButton fontSize="body-02" theme="primary">
          body-02
        </SolidButton>
      </div>
    );
  },
};
