import type { Meta, StoryObj } from "@storybook/react";

import RowForm from ".";
import Input from "../../Input";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Text from "../../Text";

const meta: Meta<typeof RowForm> = {
  component: RowForm,
  tags: ["autodocs"],
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

export const Gap: Story = {
  render: () => (
    <>
      <RowForm gap="gap-0" marginBottom="mb-3">
        <Text.Subtitle>Gap-0</Text.Subtitle>
        <Input.Text placeholder="E-mail" type="email" />
        <Input.Text placeholder="Text" type="text" />
        <Input.Password
          placeholder="Password"
          showIcon={<BsEye />}
          hideIcon={<BsEyeSlash />}
        />
      </RowForm>
      <RowForm gap="gap-1" marginBottom="mb-3">
        <Text.Subtitle>Gap-1</Text.Subtitle>
        <Input.Text placeholder="E-mail" type="email" />
        <Input.Text placeholder="Text" type="text" />
        <Input.Password
          placeholder="Password"
          showIcon={<BsEye />}
          hideIcon={<BsEyeSlash />}
        />
      </RowForm>
      <RowForm gap="gap-2" marginBottom="mb-3">
        <Text.Subtitle>Gap-2</Text.Subtitle>
        <Input.Text placeholder="E-mail" type="email" />
        <Input.Text placeholder="Text" type="text" />
        <Input.Password
          placeholder="Password"
          showIcon={<BsEye />}
          hideIcon={<BsEyeSlash />}
        />
      </RowForm>
      <RowForm gap="gap-3" marginBottom="mb-3">
        <Text.Subtitle>Gap-3</Text.Subtitle>
        <Input.Text placeholder="E-mail" type="email" />
        <Input.Text placeholder="Text" type="text" />
        <Input.Password
          placeholder="Password"
          showIcon={<BsEye />}
          hideIcon={<BsEyeSlash />}
        />
      </RowForm>
      <RowForm gap="gap-4" marginBottom="mb-3">
        <Text.Subtitle>Gap-4</Text.Subtitle>
        <Input.Text placeholder="E-mail" type="email" />
        <Input.Text placeholder="Text" type="text" />
        <Input.Password
          placeholder="Password"
          showIcon={<BsEye />}
          hideIcon={<BsEyeSlash />}
        />
      </RowForm>
      <RowForm gap="gap-5" marginBottom="mb-3">
        <Text.Subtitle>Gap-5</Text.Subtitle>
        <Input.Text placeholder="E-mail" type="email" />
        <Input.Text placeholder="Text" type="text" />
        <Input.Password
          placeholder="Password"
          showIcon={<BsEye />}
          hideIcon={<BsEyeSlash />}
        />
      </RowForm>
      <RowForm gap="gap-6" marginBottom="mb-3">
        <Text.Subtitle>Gap-6</Text.Subtitle>
        <Input.Text placeholder="E-mail" type="email" />
        <Input.Text placeholder="Text" type="text" />
        <Input.Password
          placeholder="Password"
          showIcon={<BsEye />}
          hideIcon={<BsEyeSlash />}
        />
      </RowForm>
      <RowForm gap="gap-7" marginBottom="mb-3">
        <Text.Subtitle>Gap-7</Text.Subtitle>
        <Input.Text placeholder="E-mail" type="email" />
        <Input.Text placeholder="Text" type="text" />
        <Input.Password
          placeholder="Password"
          showIcon={<BsEye />}
          hideIcon={<BsEyeSlash />}
        />
      </RowForm>
    </>
  ),
};
