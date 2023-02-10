const { rollup } = require("rollup");

(async () => {
  const bundle = await rollup({
    input: {
      index: "src/index.js",
    },
  });

  await bundle.generate({
    format: "cjs",
    exports: "named",
    preserveModules: true,
    entryFileNames: (info) => `${info.name}.cjs`,
  });

  await bundle?.close();
})();
