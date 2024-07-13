import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "utils",
      fileName: (format) => `utils.${format}.js`,
    },
    watch: {
      include: "src/*",
    },
  },
});
