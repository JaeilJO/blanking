import type { Meta, StoryObj } from "@storybook/react";

import Input from "../../Input";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import ColumnForm from ".";

const meta: Meta<typeof ColumnForm> = {
  component: ColumnForm,
  tags: ["autodocs"],
  title: "Atoms/Form/ColumnForm",
};

export default meta;
type Story = StoryObj<typeof ColumnForm>;

export const Custom: Story = {
  args: {
    children: (
      <>
        <Input.Text placeholder="E-mail" type="email" />
        <Input.Text placeholder="Text" type="text" />
        <Input.Password
          placeholder="Password"
          showIcon={<BsEye />}
          hideIcon={<BsEyeSlash />}
        />
      </>
    ),
  },
};
