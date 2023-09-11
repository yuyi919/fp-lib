import * as fs from "fs";

const index = fs.readFileSync("./dist/index.d.ts").toString();
fs.writeFileSync(
  "./dist/index.d.ts",
  index.replace(
    /export \* as (.+?) from "(.+?)";/g,
    `import * as $1 from "$2";
export { $1 };`,
  ),
);
