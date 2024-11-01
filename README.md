# project-template

최초 작성일 : 2024.11.01

## Yarn Berry + Vite + React + TS

- 사전준비
  - `npm install -g yarn`
  - `ZipFS` VSCode 확장 프로그램 설치

1. `yarn create vite ./`
2. `yarn set version berry`
3. `yarn install`
4. `yarn config get nodeLinker`
5. `yarn dlx @yarnpkg/sdks vscode`
   5-1. `ctrl` + `p`
   5-2. > select type
   5-3. sdk 사용
6. root > `.env` 파일생성
7. `.gitignore` 파일수정

```
# yarn Zero-Install
.yarn/*
!.yarn/cache
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions

.env
```

8. `yarn run dev`

## 추가설정

### 플러그인

- `yarn add -D eslint prettier eslint-plugin-react eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser`
- `yarn dlx @yarnpkg/sdks vscode`

### 경로 별칭 (임의 설정)

- tsconfig.app.json
- vite.config.ts
