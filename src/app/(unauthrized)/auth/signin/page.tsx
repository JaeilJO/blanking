import FlexBox from "@/components/Atoms/FlexBox";
import Link from "@/components/Atoms/Link";
import Text from "@/components/Atoms/Text";
import AuthWrapper from "@/components/Atoms/Wrappers/AuthWrapper";

import AuthPageHeader from "@/components/Organisms/AuthPageHeader";
import SocialSignInButtons from "@/components/Organisms/SocialSignInButtons";

import UserSignInForm from "@/components/Templates/UserSignInForm";
import socials from "@/utils/socials";

function Page() {
  return (
    <AuthWrapper>
      <AuthPageHeader
        title="Sign In"
        description="다시 찾아와 주셔서 감사합니다"
      />

      <FlexBox.Column gap="gap-3">
        {/* Form */}
        <UserSignInForm />

        {/* 비밀번호 찾는 버튼 */}
        <Link.Text
          href={"/auth/checkemail"}
          fontSize="body-01"
          fontWeight="font-bold"
        >
          비밀번호를 잊어버리셨나요?
        </Link.Text>
      </FlexBox.Column>

      {/* Social 로그인 버튼 */}
      <FlexBox.Row
        alignItems="align-items-center"
        justifyContent="justify-space-between"
      >
        <Text.Body fontSize="body-01" color="gray" fontWeight="font-regular">
          Continue with Social
        </Text.Body>
        <SocialSignInButtons socials={socials} />
      </FlexBox.Row>

      {/* Sign up 페이지 이동 링크 */}
      <Link.Text
        href={"/auth/signup"}
        fontSize="body-01"
        fontWeight="font-bold"
      >
        계정이 없으신가요?
      </Link.Text>
    </AuthWrapper>
  );
}

export default Page;
