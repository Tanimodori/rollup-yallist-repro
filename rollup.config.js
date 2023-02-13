const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const nodeBuiltins = require("builtin-modules/static");
const electronBuiltins = require("electron-builtins");

module.exports = {
  input: "src/index.js",
  output: {
    dir: "dist",
    format: "cjs",
    exports: "named",
    preserveModules: true,
    entryFileNames: (info) => `${info.name}.cjs`,
  },
  external: (src) => {
    const [name] = src.split("/");
    const externalNames = [
      ...nodeBuiltins,
      ...nodeBuiltins.map((name) => `node:${name}`),
      ...electronBuiltins,
    ];
    return externalNames.includes(name);
  },
  plugins: [resolve(), commonjs()],
};
