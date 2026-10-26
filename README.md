# Pay.nl JS SDK

[![CI](https://github.com/labd/paynl-js-sdk/actions/workflows/ci.yml/badge.svg)](https://github.com/labd/paynl-js-sdk/actions/workflows/ci.yml)

TypeScript SDKs for the [Pay.](https://www.pay.nl) (Pay.nl) payment provider APIs. Each package is
generated from Pay.'s OpenAPI specification with the [`api`](https://api.readme.dev) generator
(and fixed by hand where needed). They wrap [`@readme/api-core`](https://www.npmjs.com/package/@readme/api-core)
and give you typed request and response objects for every endpoint.

## Packages

| Package | Version | API |
| --- | --- | --- |
| [`@labdigital/paynl-connect`](./packages/connect) | [![npm](https://img.shields.io/npm/v/@labdigital/paynl-connect)](https://www.npmjs.com/package/@labdigital/paynl-connect) | Pay. Connect order API (`https://connect.pay.nl`) |
| [`@labdigital/paynl-rest`](./packages/rest) | [![npm](https://img.shields.io/npm/v/@labdigital/paynl-rest)](https://www.npmjs.com/package/@labdigital/paynl-rest) | Pay. REST API for merchants, services, clearing and more (`https://rest.pay.nl/v2`) |
| [`@labdigital/paynl-transaction`](./packages/transaction) | [![npm](https://img.shields.io/npm/v/@labdigital/paynl-transaction)](https://www.npmjs.com/package/@labdigital/paynl-transaction) | Pay. transaction API (`https://rest.pay.nl/v2`) |

Each package README covers installation and usage.

## Requirements

- Node.js >= 22
- The packages are ESM only.

## Development

This is a pnpm workspace that uses Turborepo, tsdown and Biome.

```sh
pnpm install
pnpm build      # build all packages (turbo + tsdown)
pnpm lint       # biome check
pnpm typecheck  # tsc --noEmit in every package
pnpm check      # lint + typecheck, as run in CI
pnpm format     # biome check --write
```

The repository has no test suite.

### Regenerating the SDKs

The `generate-sdk` task in [`Taskfile.yaml`](./Taskfile.yaml) (run it with
[Task](https://taskfile.dev)) regenerates `src/`, `openapi.json` and `tsconfig.json` for every package
from Pay.'s OpenAPI definitions. It also overwrites each package `README.md`, so restore those
afterwards. Review the diff carefully, because some generated code was fixed by hand.

## Release

Releases use [Changesets](https://github.com/changesets/changesets). Add a changeset with your change:

```sh
pnpm changeset
```

When changes land on `main`, the release workflow opens a "Release new version" pull request
(`pnpm publish:version`). Merging that pull request publishes the packages to npm with trusted publishing (`pnpm publish:ci`).

## License

The published packages are licensed under the MIT license (see each `package.json`).
