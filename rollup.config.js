const { nodeResolve } = require("@rollup/plugin-node-resolve");

module.exports = {
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
