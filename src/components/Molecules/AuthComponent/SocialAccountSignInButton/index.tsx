import Text from "@/components/Atoms/Text";
import { signIn } from "next-auth/react";
import Button from "@/components/Atoms/Button";

export interface SocialAccountSignInButtonProps {
  social: string;
  icon: React.ReactNode;
  disabled?: boolean;
}

function SocialAccountSignInButton({
  social,
  icon,
  disabled,
}: SocialAccountSignInButtonProps) {
  return (
    <Button.FillButton
      type="button"
      onClick={() => signIn(`${social}`)}
      theme="transparent"
      square={true}
      squareSize={60}
      disabled={disabled}
    >
      <Text.Body textAlign="center" level="01" theme="primary">
        {icon}
      </Text.Body>
    </Button.FillButton>
  );
}

export default SocialAccountSignInButton;
