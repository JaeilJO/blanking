# Nextjs with SCSS

해당 템플릿은 다음 라이브러리 혹은 프레임 워크를 사용했습니다.

-   Nextjs 14
-   SCSS
-   Storybook
-   classnames

## 시작하는 법

1. npm i 로 시작해주세요
2. root layout에 들어가서 font를 선택해주세요
3. global.scss는 meyerweb.com을 참고했으니 수정사항이 있으면 수정해주세요
4. typescript alia는 기본적으로 다음과 같이 설정되어 있습니다.
    - "@/_": ["./src/_"],
    - "@/style/_": ["./src/style/_"],
    - "@/components/_": ["./src/components/_"]
      만약 추가적인 alias를 원한다면 .storybook 폴더의 main.ts파일의 webpackFinal부분을 같이 수정해주셔야 storybook 사용시 에러가 나지 않습니다
