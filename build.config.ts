import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  // If entries is not provided, will be automatically inferred from package.json
  entries: [
    // default
    {
      input: "./src",
      builder: "mkdist",
      outDir: "./dist",
    },
    // mkdist builder transpiles file-to-file keeping original sources structure
    // {
    //   builder: "mkdist",
    //   input: "./src/package/components/",
    //   outDir: "./build/components",
    // },
  ],
  // Generates .d.ts declaration file
  declaration: false,
  failOnWarn: false,
  clean: false
});
