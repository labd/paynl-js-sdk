import type { Rolldown, UserConfig } from "tsdown";

/**
 * Rolldown applies Node.js ESM interop (`__toESM(mod, 1)`) to external
 * CommonJS imports because the packages are `"type": "module"`. In the CJS
 * output this ignores the `__esModule` flag of dual packages such as
 * `@readme/api-core`, making `default` the whole exports object. Drop the
 * node-mode flag in CJS output so the `__esModule` flag is respected again
 * (same behaviour as the previous tsup/esbuild build).
 */
const cjsEsModuleInterop = (): Rolldown.Plugin => ({
	name: "cjs-esmodule-interop",
	renderChunk(code, _chunk, options) {
		if (options.format !== "cjs") return null;
		const out = code.replace(/__toESM\(([\w$]+), 1\)/g, "__toESM($1)");
		return out === code ? null : { code: out, map: null };
	},
});

export const config: UserConfig = {
	entry: ["./src/index.ts", "./src/sdk.ts", "./src/types.ts"],
	format: ["esm", "cjs"],
	// Keep .js/.cjs/.d.ts/.d.cts names to match package.json exports
	fixedExtension: false,
	dts: true,
	clean: true,
	minify: false,
	shims: true,
	sourcemap: true,
	cjsDefault: true,
	plugins: [cjsEsModuleInterop()],
};
