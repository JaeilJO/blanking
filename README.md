<p align="center">
  <img src="./src/public/Logo.png">
</p>

<h3 align="middle">Language</h3>

<p align="middle">
  <img src="https://img.shields.io/badge/language-js-yellow.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-scss-lightpink.svg?style=flat-square"/>
</p>

<h3 align="middle">Frame Work</h3>
<p align="middle">
  <img src="https://img.shields.io/badge/framework-next.js-black.svg?style=flat-square"/>
</p>

<h3 align="middle">Library</h3>
<p align="middle">
  <img src="https://img.shields.io/badge/library-storybook-red.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/library-editorJs-skyblue.svg?style=flat-square"/>
    <img src="https://img.shields.io/badge/library-nextAuth-blue.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/library-zustand-lightblue.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/library-prisma-purple.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/library-axios-lightgray.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/library-bcrypt-lightgray.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/library-uuid-lightgray.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/library-classnames-lightgray.svg?style=flat-square"/>
</p>

<h3 align="middle">License</h3>
<p align="middle">
  <a href="https://github.com/daybrush/moveable/blob/master/LICENSE" target="_blank">
      <img src="https://img.shields.io/github/license/woowacourse/javascript-lotto.svg?style=flat-square&label=license&color=08CE5D"/>
  </a>
</p>

## 프로젝트 소개

교육을 위한 어플리케이션으로, 빈칸을 쉽게 만들 수 있게 해주는 어플리케이션이다.

## 제작 동기

영어를 공부하면서 불편한 점이, 어떠한 단어를 외웠을때 해당 단어를 일일이 손으로 가리거나 노트앱으로 검정색으로 색칠을 하는 등 귀찮은 점이 너무 많았다. 그리고 Margin Note라는 어플리케이션도 결제하여 사용해봤지만, 빈칸을 만드는 방법이 직관적이지 않아 불편함을 겪어서 직접만들게 되었다.

## 주요 기능

-   Notion과 같은 사용성
-   빈칸만들기 기능

## 비로그인 상태에서 경험해보기

:warning: 주의 : 브라우저 width가 768px이상인 경우에만 체험해볼 수 있습니다.

1. https://myblanking.vercel.app/auth/signin -> 접속
2. Blanking 로고부분에서 마우스 휠을 이용해서 아래로 내리기
3. 체험 해보기

## 개발 과정

https://www.notion.so/Blanking-569ce9030ffb48b4a925a6c0613685dc?pvs=4

해당 링크의 **프로젝트 진행과정**을 확인해주세요

## 반성할 부분 및 아쉬운 부분

-   Figma를 통해서 여러 상황에 대해서 만들었지만, 생각보다 더 많은 예상하지 못한 상황이 많았다. 그래서 즉석으로 Component를 만든 것이 너무 많아져서 원래 하려고 했던 취지의 디자인에 많이 벗어난 것도 많이 보였다.
-   Figma에서 최종 결론을 냈을때, 급한마음에 작은 화면 크게에 대처하지 못한 것이 나중에 코딩 복잡도를 꽤 올렸다. large인 경우 midium인 경우 small인 경우 이 세 경우를 세세하게 계획을 세워서 진행했어야했는데, 그러지 못한 것이 아쉬웠다.
-   Backend를 간접적으로 경험하다보니 Figma로 디자인 계획을 세우고 기능 계획을 반드시 세워야하겠다는 마음이 크게 났다.
    -   Figma로 먼저 디자인 계획을 세우고 기능 계획을 세울때 end point도 전부 적어 놓는 것이 나중에 코딩을 덜 복잡하게 하는 것에 도움을 줄 것 같다.
-   Docker file을 미리 만들어 두자. Docker file을 나중에 만들려고 하니까 너무 많은 에러를 직면해서 아직(2024년 2월 13일)까지 Docker file을 작성하고 실행해 보는 중이다. 코드가 복잡하지 않은 초기에 Dockerfile을 만들어 두는 것이 좋을 것 같다
-   메인 기능을 담당하는 Library는 최대한 많은 검증을 거치자, 해당 앱의 메인 기능을 담당하는 Editor.js를 사용하는데 생각보다 많은 어려움을 겪었다. db에 데이터가 들어갔다가 나오면 EventListener가 지워지는 현상이 나오고 해당 문제를 해결하려고 Git-hub에 질문했으나 답변을 해주는 사람도 없고, 나 처럼 커스텀을 하려는 사람보다 만들어진 기능 자체를 사용하려는 사람이 더 많아서 문제 해결을 못해서 몇가지 기능을 포기하고 우회했던 경험을 겪었다.
    -   현재 Editor.js를 대체하는 라이브러리가 아닌 직접 해당 기능을 만들어보기 위해 시도하려고한다.
