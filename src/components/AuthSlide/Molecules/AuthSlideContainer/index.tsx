"use client";

// Utils
import { useState } from "react";

//Components
import ExampleSlideItem from "../ExampleSlideItem";
import LogoSlideItem from "../LogoSlideItem";
import AuthSlideItemContainer from "../../Atoms/AuthSlideItemContainer";
import AuthSlideScrollGuide from "../../Atoms/AuthSlideScrollGuide";

function AuthSlideContainer() {
  const [isScrolling, setIsScrolling] = useState(false);

  const onScroll = () => {
    if (isScrolling) return;
    setIsScrolling(true);
  };

  /**
   * Slide에 아이템 추가하는 법
   * 1. Molecules에 새로운 아이템 컴포넌트를 추가한다.
   * 2. AuthSlideItemWrapper컴포넌트로 감싼다.
   * 3. 아이템 컴포넌트를 다 제작했다면 밑의 AuthSlideContainer 자식으로 추가한다.
   * */

  return (
    <AuthSlideItemContainer onScroll={onScroll}>
      <LogoSlideItem />
      <ExampleSlideItem />

      {/* 스크롤 가이드 */}
      {isScrolling ? null : <AuthSlideScrollGuide />}
    </AuthSlideItemContainer>
  );
}

export default AuthSlideContainer;
