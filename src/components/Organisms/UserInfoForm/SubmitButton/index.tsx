import Button from "@/components/Atoms/Button";
import { buttonColorTheme } from "@/components/Atoms/Button/BaseButton/index.type";

import { ReactNode } from "react";

function UserInfoFormSubmitButton({
  children,
  icon,
  theme = "primary",
}: {
  children: string;
  icon?: ReactNode;
  theme?: buttonColorTheme;
}) {
  return (
    <Button.Filled
      type="submit"
      fontWeight="font-bold"
      theme={theme}
      fontSize="sub-02"
      icon={icon}
    >
      {children}
    </Button.Filled>
  );
}

export default UserInfoFormSubmitButton;
