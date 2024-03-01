import FlexBox from "@/components/Atoms/FlexBox";
import Text from "@/components/Atoms/Text";
import SocialAccountSignInButton, {
  SocialAccountSignInButtonProps,
} from "@/components/Molecules/AuthComponent/SocialAccountSignInButton";

interface SocilaAccountSignInButtonsProps {
  socials: SocialAccountSignInButtonProps[];
}

function SocilaAccountSignInButtons({
  socials,
}: SocilaAccountSignInButtonsProps) {
  return (
    <FlexBox
      display="flex"
      gap={1}
      justifyContent="center"
      backgroundColor="none"
    >
      <Text.Body block={true} level="01" textAlign="left">
        Continue with Social Accounts
      </Text.Body>

      {socials.map((social) => (
        <SocialAccountSignInButton
          key={social.social}
          social={social.social}
          icon={social.icon}
        />
      ))}
    </FlexBox>
  );
}

export default SocilaAccountSignInButtons;
