import Button from "@/components/Atoms/Button";
import { ReactNode } from "react";

function UserInfoFormSubmitButton({
  children,
  icon,
}: {
  children: string;
  icon?: ReactNode;
}) {
  return (
    <Button.Solid
      type="submit"
      fontWeight="font-bold"
      theme="primary"
      fontSize="sub-02"
      icon={icon}
    >
      {children}
    </Button.Solid>
  );
}

export default UserInfoFormSubmitButton;
