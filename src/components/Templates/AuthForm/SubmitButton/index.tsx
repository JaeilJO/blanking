import Button from "@/components/Atoms/Button";
import { ReactNode } from "react";

function AUthFormSubmitButton({
  children,
  icon,
}: {
  children: string;
  icon?: ReactNode;
}) {
  return (
    <Button.Solid type="submit" theme="primary" icon={icon}>
      {children}
    </Button.Solid>
  );
}

export default AUthFormSubmitButton;
