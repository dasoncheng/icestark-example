import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueJSX from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/module-vue/",
  plugins: [vue(), VueJSX()],
  build: {
    lib: {
      entry: "./src/main.ts",
      name: "micro-vue",
      formats: ["umd"],
      fileName: (format) => `micro-vue.${format}.js`,
    },
  },
});
