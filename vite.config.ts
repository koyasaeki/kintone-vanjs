import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "src/index.ts",
      },
      output: {
        format: "iife",
        dir: "dist",
        entryFileNames: "index.js",
      },
    },
  },
});
