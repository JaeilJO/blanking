import type { Meta, StoryObj } from "@storybook/react";

import RowForm from ".";
import Input from "../../Input";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const meta: Meta<typeof RowForm> = {
  component: RowForm,
  tags: ["autodocs"],
  title: "Atoms/Form/RowForm",
};

export default meta;
type Story = StoryObj<typeof RowForm>;

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
