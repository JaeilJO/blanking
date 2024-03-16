import Button from "@/components/Atoms/Button";
import { buttonColorTheme } from "@/components/Atoms/Button/BaseButton/index.type";

import { ReactNode, useContext } from "react";
import { UserInfoFormContext } from "..";

function UserInfoFormSubmitButton({
  children,
  icon,
  theme = "primary",
}: {
  children: string;
  icon?: ReactNode;
  theme?: buttonColorTheme;
}) {
  const value = useContext(UserInfoFormContext);
  const { loading } = value!;
  return (
    <Button.Filled
      type="submit"
      fontWeight="font-bold"
      theme={theme}
      fontSize="sub-02"
      icon={icon}
      disabled={loading}
    >
      {children}
    </Button.Filled>
  );
}

export default UserInfoFormSubmitButton;
