import FlexBox from "@/components/Atoms/FlexBox";
import SocialSignInButton from "@/components/Molecules/SocialSignInButton";
import { SocialType } from "@/utils/socials";

function SocialSignInButtons({ socials }: { socials: SocialType[] }) {
  return (
    <FlexBox.Row gap="gap-3" display="inline">
      {socials.map((social) => (
        <SocialSignInButton
          key={social.socialName}
          socialName={social.socialName}
          icon={social.icon}
          color={social.color}
        />
      ))}
    </FlexBox.Row>
  );
}

export default SocialSignInButtons;
