import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import TextInput from ".";

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  tags: ["autodocs"],
  title: "Atoms/Input/TextInput",
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Custom: Story = {
  args: {
    placeholder: "placeholder",
  },
};

export const Theme: Story = {
  render: () => (
    <>
      <TextInput placeholder="primary" theme="primary" marginBottom="mb-3" />
      <TextInput placeholder="gray" theme="gray" marginBottom="mb-3" />
      <TextInput
        placeholder="light-gray"
        theme="light-gray"
        marginBottom="mb-3"
      />
      <TextInput placeholder="red" theme="red" marginBottom="mb-3" />
      <TextInput placeholder="green" theme="green" marginBottom="mb-3" />
      <TextInput placeholder="yellow" theme="yellow" marginBottom="mb-3" />
      <TextInput placeholder="black" theme="black" marginBottom="mb-3" />
      <TextInput placeholder="white" theme="white" marginBottom="mb-3" />
    </>
  ),

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const inputs = canvas.getAllByRole("textbox");

    for (const input of inputs) {
      await userEvent.type(input, "test", {
        delay: 100,
      });
    }
  },
};
