const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");

module.exports = {
  input: "src/index.js",
  output: {
    dir: "dist",
    format: "cjs",
    exports: "named",
    preserveModules: true,
    entryFileNames: (info) => `${info.name}.cjs`,
  },
  plugins: [resolve(), commonjs()],
};
