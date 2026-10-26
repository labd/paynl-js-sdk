# @labdigital/paynl-transaction

## 0.3.0

### Minor Changes

- 179e1d8: **The packages are now ESM-only.** They are built with tsdown and no longer ship CommonJS builds (`dist/*.cjs`); `require()` of these packages is no longer supported, use `import` instead (Node.js 22+ can also `require()` ESM). The `exports` map, `main` and `types` now point at the emitted ESM files and declarations. Tooling was updated to TypeScript 7 and Biome 2.
- 7acdc42: Update `@readme/api-core` to 7.0.3 to resolve security advisories in transitive dependencies. Drops support for Node.js 18 and 20 (end-of-life); the minimum supported Node.js version is now 22.

## 0.2.0

### Minor Changes

- 20ab56f: Resolve generate issues and remove dist files

## 0.1.1

### Patch Changes

- 381b9f5: Fix release process

## 0.1.0

### Minor Changes

- 65c483a: Initial release
