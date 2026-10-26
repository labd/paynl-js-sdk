import { defineConfig } from "tsdown";

export default defineConfig({
	publint: true,
	failOnWarn: true,
	// rolldown-plugin-dts warns that the TypeScript 7 (tsgo) API is experimental; that is expected here.
	suppressWarnings: /TypeScript 7\.0 does not yet have a stable API/,
	entry: ["./src/index.ts", "./src/sdk.ts", "./src/types.ts"],
	format: ["esm"],
	dts: true,
	sourcemap: true,
	platform: "node",
	fixedExtension: false,
});
