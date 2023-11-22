# Turborepo monorepo example with NestJS and ReactJS

## Quickstart

```shell
docker compose up
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

