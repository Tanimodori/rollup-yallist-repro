import { rollup } from "rollup";

const bundle = await rollup({
  input: {
    index: "src/index.js",
  },
});

await bundle.generate({
  output: {
    exports: "named",
    preserveModules: true,
    entryFileNames: (info) => `${info.name}.cjs`,
  },
});

await bundle?.close();
