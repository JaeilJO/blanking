import type { Meta, StoryObj } from "@storybook/react";

import TextFieldWrapper from ".";
import TextField from "..";
import TextFieldInput from "../TextFieldInput";
import Button from "@/components/Atoms/Button";
import TextFieldLabel from "../TextFieldLabel";
import TextFieldPasswordButton from "../TextFieldPasswordButton";

const meta: Meta<typeof TextFieldWrapper> = {
  component: TextFieldWrapper,
};

export default meta;
type Story = StoryObj<typeof TextFieldWrapper>;

export const Primary: Story = {
  render: () => (
    <>
      <TextField
        theme="primary"
        type="text"
        textAlign="left"
        placeholder="Name"
        name="name"
        label={true}
        disabled={true}
      >
        <TextFieldLabel />
        <TextFieldInput />
        <TextFieldPasswordButton />
      </TextField>
      <Button.Filled theme="primary">Hello</Button.Filled>
    </>
  ),
};
