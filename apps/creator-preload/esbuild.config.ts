import path from "node:path";
import { build } from "esbuild";
import { nodeExternalsPlugin } from "esbuild-node-externals";

build({
  entryPoints: ["src/preload.ts"],
  outdir: "dist",
  bundle: true,
  platform: "node",
  target: "node20",
  format: "cjs",
  sourcemap: true,
  external: ["electron"],
  plugins: [nodeExternalsPlugin()],
  tsconfig: path.resolve(__dirname, "tsconfig.json"),
});
