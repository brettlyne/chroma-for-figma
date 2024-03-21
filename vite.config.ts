import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  root: "./src/ui",
  plugins: [react(), viteSingleFile()],
  build: {
    target: "esnext",
    emptyOutDir: false,
    cssCodeSplit: false,
    outDir: "../../dist",
    minify: false,
  },
});
