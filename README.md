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

-   교육을 위한 어플리케이션
-   빈칸만들기를 직관적으로 쉽게 할 수 있게 도와줌

## 제작 동기

-   영어 암기시, 빈칸만들기 불편
-   Margin Note 어플리케이션 결제 후 사용했지만, 빈칸을 만드는 방법이 직관적이 않아서 불편
-   따라서 이를 해결하고자 제작

## 사용패턴
### 컴파운드 컴포넌트 패턴
``` typescript
   <UserInfoForm>
      <UserInfoForm.Form onSubmit={onSubmit} gap="gap-4">
        <UserInfoForm.Input.Text
          name="email"
          type="email"
          placeholder="E-mail"
          required
        />
        <UserInfoForm.Input.Password
          name="password"
          placeholder="Password"
          required
        />
        <UserInfoForm.SubmitButton>Sign In</UserInfoForm.SubmitButton>
      </UserInfoForm.Form>
    </UserInfoForm>
```
Form 구조를 컴파운드 컴포넌트 패턴으로 만들었습니다.
```userInfoForm```이라는 컴포넌트가 Provider역할을 해서 input에 있는 value를 가져와 줍니다.
```Form```에서는 onSubmit함수를 받습니다. ```userInfoForm```컴포넌트에서 가져온 data를 onSubmit함수에 넘겨주는 역할을 합니다.
해당 컴포넌트를 사용해서 해당 프로젝트의 모든 Form들을 제작했습니다. 디자인적으로 신경쓰는 부분이 적어져서 로직에 더욱 더 힘을 쓸 수 있었습니다.

## Component 구조
```
📦 components
├─ Atoms
|
├─ Molecules
│
├─ Organisms
│ 
└─ Template
  
```
- Atoms
  - 재사용이 많은 UI Component를 모아 두었습니다
    
- Molecules
  - Atoms를 이용해서 만들었거나, 특정 페이지 혹은 레이아웃에서 독단적으로 사용되는 Wrapper등을 모아 두었습니다
    
- Organisms
  - Atoms와 Molecules를 이용해서 만든 UI Component를 모아두었습니다
    
- Template
  - 페이지에 보여지기 직전의 컴포넌트를 모아주는 작업을 합니다.
  - 비즈니스 로직은 보통 여기를 통해서 작업합니다.
 

## 주요 기능

-   Notion과 같은 사용성
-   빈칸만들기 기능

## 비로그인 상태에서 경험해보기

:warning: 주의 : 브라우저 width가 768px이상인 경우에만 체험해볼 수 있습니다.

1. https://myblanking.vercel.app/auth/signin 에 접속
2. Blanking 로고부분에서 마우스 휠을 이용해서 아래로 내리기
   <img src="./src/public/Readme/Main화면.png">
3. 체험
   <img src="./src/public/Readme/튜토리얼화면.png">

## 시연 영상

<p align="middle">
  <img src="./src/public/Readme/시연영상.gif">
</p>

## 개발 과정

https://www.notion.so/Blanking-569ce9030ffb48b4a925a6c0613685dc?pvs=4

해당 링크의 **프로젝트 진행과정**을 확인해주세요

## 회고

1. **디자인의 유연성과 예측 불가능성**: Figma를 사용하여 다양한 상황에 대비한 디자인을 제작했음에도 불구하고, 예상치 못한 상황이 많이 발생했습니다. 이로 인해 즉흥적으로 컴포넌트를 추가하게 되었고, 이는 프로젝트의 원래 디자인 취지에서 벗어나는 결과를 발생시켰습니다.
2. **화면 크기 대응의 계획 미흡**: 다양한 화면 크기(large, medium, small)에 대응하기 위한 세밀한 계획을 세우지 못한 것이 나중에 코딩의 복잡도를 증가시켰습니다. 이는 급한 마음에 충분히 고려하지 못한 부분이었고, 프로젝트의 진행에 있어 아쉬운 점으로 남았습니다.
3. **디자인 및 기능 계획의 중요성**: 백엔드에 대한 간접경험을 통해, 디자인 계획을 끝낸 후 기능적인 계획을 체계적으로 세워야 한다는 것을 깨달았습니다. 모든 엔드포인트를 미리 계획하고 기능 로직 순서 등을 미리 순서도를 통해서 계획하는 것이 좋은 방향이 될 것으로 판단이 됩니다.
4. **Dockerfile의 조기 준비**: 프로젝트 초기에 Dockerfile을 준비하는 것의 중요성을 인식했습니다. 나중에 Dockerfile을 작성하려 할 때 많은 에러에 직면했고, 이는 작업의 지연으로 이어졌습니다. 따라서, 코드의 복잡도가 낮은 초기 단계에서 Dockerfile을 준비하는 것이 바람직하다고 판단되었습니다.
5. **메인 기능 라이브러리의 검증**: 프로젝트에서 메인 기능을 담당하는 Editor.js 라이브러리 사용 중 다수의 어려움을 겪었습니다. 특히, 데이터베이스 상호작용 후 이벤트 리스너가 사라지는 문제가 발생했으나, GitHub에서 해결책을 찾지 못했습니다. 이는 Editor.js를 사용하는 사용자들이 커스텀 기능보다 기본 기능 사용을 선호하는 경향 때문에 문제 해결에 어려움을 겪었고, 몇몇 기능을 포기하고 우회하는 결정을 내렸습니다. 이 경험을 바탕으로, 메인 기능을 담당하는 라이브러리를 도입 하기 전에 미리 사용해보고, 여러가지 필요한 부분을 시도해 봄으로써 해당 라이브러리가 본인 프로젝트에 문제가 없는지 검토를 해보는 것이 좋을 것이라고 판단 되었습니다.
6. **재사용성과 Design 시스템에 대한 아쉬움** : 나중에서야 Component의 디자인 시스템에 대해서 알게 되었고, Atomic 디자인에 대해서 알게 되었다. 해당 Atomic을 적용하려고 하니 너무 많은 Component를 만들어놔버렸고 그래도 Logic과 UI 담당을 분리해야해서 해당 작업을 뒤 늦게나마 진행하고 있다.

-   Editor.js를 대체할 수 있는 라이브러리를 직접 개발해보려는 시도를 계획하고 있습니다.
