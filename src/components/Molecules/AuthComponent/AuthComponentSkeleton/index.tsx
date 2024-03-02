"use client";

import Skeleton from "@/components/Atoms/Skeleton";
import AuthWrapper from "../AuthWrapper";
import FlexBox from "@/components/Atoms/FlexBox";

function AuthComponentSkeleton() {
  return (
    <AuthWrapper>
      {/* Title With SubTitle */}
      <FlexBox flexDirection="column" gap={2}>
        <Skeleton.TextSkeleton width={200} fontSize="title-02" />
        <Skeleton.TextSkeleton width={100} fontSize="body-01" />
      </FlexBox>

      {/* Form */}
      <FlexBox flexDirection="column" gap={3}>
        {/* LabelWithInput */}
        <FlexBox flexDirection="column" gap={1}>
          <Skeleton.TextSkeleton width={80} fontSize="body-01" />
          <Skeleton.BoxSkeleton width="100%" height="64px" />
        </FlexBox>

        {/* LabelWithInput */}
        <FlexBox flexDirection="column" gap={1}>
          <Skeleton.TextSkeleton width={80} fontSize="body-01" />
          <Skeleton.BoxSkeleton width="100%" height="64px" />
        </FlexBox>

        {/* Button */}
        <Skeleton.BoxSkeleton width="100%" height="64px" />

        {/* 비밀번호를 잊어버리셨나요? */}
        <FlexBox justifyContent="center">
          <Skeleton.TextSkeleton width={200} fontSize="subTitle-01" />
        </FlexBox>
      </FlexBox>

      {/* Social */}
      <FlexBox alignItems="center" justifyContent="space-between">
        <Skeleton.TextSkeleton width={250} fontSize="body-01" />
        <Skeleton.BoxSkeleton width="60px" height="60px" />
      </FlexBox>

      {/* 계정이 없으신가요? */}
      <Skeleton.TextSkeleton width={200} fontSize="subTitle-01" />
    </AuthWrapper>
  );
}

export default AuthComponentSkeleton;
