const { nodeResolve } = require("@rollup/plugin-node-resolve");

export default {
  input: "src/index.js",
  output: {
    dir: "dist",
    format: "cjs",
    exports: "named",
    preserveModules: true,
    entryFileNames: (info) => `${info.name}.cjs`,
  },
  plugins: [nodeResolve()],
};
