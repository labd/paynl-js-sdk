---
"@labdigital/paynl-connect": minor
"@labdigital/paynl-rest": minor
"@labdigital/paynl-transaction": minor
---

**The packages are now ESM-only.** They are built with tsdown and no longer ship CommonJS builds (`dist/*.cjs`); `require()` of these packages is no longer supported, use `import` instead (Node.js 22+ can also `require()` ESM). The `exports` map, `main` and `types` now point at the emitted ESM files and declarations. Tooling was updated to TypeScript 7 and Biome 2.
