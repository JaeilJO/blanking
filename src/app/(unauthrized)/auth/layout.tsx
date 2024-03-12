// Utils
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { NextAuthOption } from "@/lib/nextAuth/auth";

// Components
import AuthLayoutWrapper from "@/components/Atoms/Wrappers/AuthLayoutWrapper";
import AuthSlideWrapper from "@/components/Atoms/Wrappers/AuthSlideWrapper";
import Carousel from "@/components/Organisms/Carousel";
import SectionContainer from "@/components/Organisms/Carousel/SectionContainer";

import LogoSection from "@/components/Organisms/Carousel/SectionContents/LogoSection";
import CarouselSection from "@/components/Organisms/Carousel/CarouselSection";
import ExperienceSection from "@/components/Organisms/Carousel/SectionContents/ExperienceSection";

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
        <Carousel startSectionId="logo" sectionIds={["logo", "expirence"]}>
          <SectionContainer>
            <CarouselSection sectionId="logo" content={<LogoSection />} />
            <CarouselSection
              sectionId="expirence"
              content={<ExperienceSection />}
            />
          </SectionContainer>
        </Carousel>
      </AuthSlideWrapper>

      {children}
    </AuthLayoutWrapper>
  );
}

export default Layout;
