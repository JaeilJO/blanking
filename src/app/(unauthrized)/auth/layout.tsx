// Utils
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { NextAuthOption } from "@/lib/nextAuth/auth";

// Components
import AuthLayoutWrapper from "@/components/Atoms/Wrappers/AuthLayoutWrapper";
import AuthSlideWrapper from "@/components/Atoms/Wrappers/AuthSlideWrapper";
import Carousel from "@/components/Templates/Carousel";
import SectionContainer from "@/components/Templates/Carousel/SectionContainer";
import Section from "@/components/Templates/Carousel/Section";
import LogoSection from "@/components/Templates/Carousel/SectionContents/LogoSection";

async function Layout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(NextAuthOption);

  if (session) {
    //이름이 한글일 수 도 있으니까 인코딩 해준다.
    const encodedText = encodeURIComponent(session?.user?.name || "");
    return redirect(`/user/${encodedText}`);
  }

  return (
    <AuthLayoutWrapper>
      {/* Carousel */}
      <AuthSlideWrapper>
        <Carousel startSectionId="logo">
          <SectionContainer>
            <Section sectionId="logo" content={<LogoSection />} />
          </SectionContainer>
        </Carousel>
      </AuthSlideWrapper>

      {children}
    </AuthLayoutWrapper>
  );
}

export default Layout;
