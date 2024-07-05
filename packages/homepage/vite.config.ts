import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    watch: {
      include: "./src/*",
    },
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "homepage",
      fileName: (format) => `homepage.${format}.js`,
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
