import type { Meta, StoryObj } from "@storybook/react";

import SolidButton from ".";
import { BsGoogle } from "react-icons/bs";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof SolidButton> = {
  component: SolidButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SolidButton>;

export const Custom: Story = {
  args: {
    children: "Solid Button",
  },
};

export const Theme: Story = {
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

export const Display: Story = {
  render: () => (
    <div>
      <SolidButton display="block" theme="primary">
        Blcok
      </SolidButton>
      <SolidButton display="inline" theme="gray">
        Inline
      </SolidButton>
    </div>
  ),
};

export const Icon: Story = {
  render: () => (
    <div>
      <SolidButton theme="primary" icon={<BsGoogle />}>
        Google
      </SolidButton>
    </div>
  ),
};

export const FontSize: Story = {
  render: () => {
    return (
      <div>
        <SolidButton
          display="inline"
          fontSize="tit-01"
          theme="primary"
          marginLeft="ml-3"
        >
          tit-01
        </SolidButton>
        <SolidButton
          display="inline"
          fontSize="tit-02"
          theme="primary"
          marginLeft="ml-3"
        >
          tit-02
        </SolidButton>
        <SolidButton
          display="inline"
          fontSize="tit-03"
          theme="primary"
          marginLeft="ml-3"
        >
          tit-03
        </SolidButton>
        <SolidButton
          display="inline"
          fontSize="sub-01"
          theme="primary"
          marginLeft="ml-3"
        >
          sub-01
        </SolidButton>
        <SolidButton
          display="inline"
          fontSize="sub-02"
          theme="primary"
          marginLeft="ml-3"
        >
          sub-02
        </SolidButton>
        <SolidButton
          display="inline"
          fontSize="body-01"
          theme="primary"
          marginLeft="ml-3"
        >
          body-01
        </SolidButton>
        <SolidButton
          display="inline"
          fontSize="body-02"
          theme="primary"
          marginLeft="ml-3"
        >
          body-02
        </SolidButton>
      </div>
    );
  },
};

export const FontWeight: Story = {
  render: () => (
    <div>
      <SolidButton
        display="inline"
        marginLeft="ml-3"
        fontWeight="font-bold"
        theme="primary"
      >
        Bold
      </SolidButton>
      <SolidButton
        display="inline"
        marginLeft="ml-3"
        fontWeight="font-light"
        theme="primary"
      >
        Light
      </SolidButton>
      <SolidButton
        display="inline"
        marginLeft="ml-3"
        fontWeight="font-regular"
        theme="primary"
      >
        Regular
      </SolidButton>
    </div>
  ),
};

export const TextAlign: Story = {
  render: () => (
    <div>
      <SolidButton marginBottom="mb-3" textAlign="text-left" theme="primary">
        Left
      </SolidButton>
      <SolidButton marginBottom="mb-3" textAlign="text-center" theme="primary">
        Center
      </SolidButton>
      <SolidButton marginBottom="mb-3" textAlign="text-right" theme="primary">
        Right
      </SolidButton>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div>
      <SolidButton disabled theme="primary">
        Disabled Button
      </SolidButton>
    </div>
  ),
};
