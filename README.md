# Turborepo monorepo example with NestJS and ReactJS

## Quickstart

```shell
docker compose up -d
```

```shell
# 패키지 추가 후에는 다시 빌드를 해줘야 함
docker compose up -d -V --build <servicename>
```

## Apps and Packages

- `api`: a [nestjs](https://docs.nestjs.com/) app
- `docs`: a [create-react-app](https://create-react-app.dev) app
- `web`: another [create-react-app](https://create-react-app.dev) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-plugin-react` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

## Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting

## 참고

- https://turbo.build/
- https://github.com/vercel/turbo/tree/main/examples/with-create-react-app
- https://github.com/vercel/turbo/tree/main/examples/with-docker
- https://dev.to/moofoo/creating-a-development-dockerfile-and-docker-composeyml-for-yarn-122-monorepos-using-turborepo-896
- https://nestjs.com/
