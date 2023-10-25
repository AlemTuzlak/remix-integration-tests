/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    // allows you to use stuff like describe, it, vi without importing
    globals: true,
    // disables multi-threading and runs test serially, you can change this
    threads: false,
    environment: "happy-dom",
    // Path to your setup script that we will go into detail below
    setupFiles: ["./tests/setup.integration.ts"],
    // Up to you, I usually put my integration tests inside of integration
    // folders
    include: ["./app/**/integration/*.test.ts"],
  },
});
