import { defineConfig } from "vitest/config";

// ref: https://vitest.dev/config/
export default defineConfig({
  test: {
    watch: process.argv.includes("--watch"),
  },
});
