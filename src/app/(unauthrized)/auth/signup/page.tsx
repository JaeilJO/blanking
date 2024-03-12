import FlexBox from "@/components/Atoms/FlexBox";
import Link from "@/components/Atoms/Link";
import Text from "@/components/Atoms/Text";
import AuthWrapper from "@/components/Atoms/Wrappers/AuthWrapper";

import AuthPageHeader from "@/components/Organisms/AuthPageHeader";
import SocialSignInButtons from "@/components/Organisms/SocialSignInButtons";

import socials from "@/utils/socials";
import UserSignUpForm from "@/components/Templates/UserSignUpForm";

function Page() {
  return (
    <AuthWrapper>
      <AuthPageHeader title="Sign Up" description="환영합니다" />

      {/* Form */}
      <UserSignUpForm />

      {/* Social */}
      <FlexBox.Row alignItems="center" justifyContent="space-between">
        <Text.Body fontSize="body-01" color="gray" fontWeight="font-regular">
          Continue with Social
        </Text.Body>
        <SocialSignInButtons socials={socials} />
      </FlexBox.Row>

      <Link.Text
        href={"/auth/signin"}
        fontSize="body-01"
        fontWeight="font-bold"
      >
        계정이 이미 있으신가요?
      </Link.Text>
    </AuthWrapper>
  );
}

export default Page;
