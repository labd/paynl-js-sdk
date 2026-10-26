import { defineConfig } from "tsdown";

export default defineConfig({
	entry: ["./src/index.ts", "./src/sdk.ts", "./src/types.ts"],
	format: ["esm"],
	dts: true,
	sourcemap: true,
	platform: "node",
	fixedExtension: false,
});
