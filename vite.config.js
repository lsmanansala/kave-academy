import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginImp from "vite-plugin-imp";
import { getThemeVariables } from "antd/dist/theme.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      optimize: true,
      libList: [
        {
          libName: "antd",
          libDirectory: "es",
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          ...getThemeVariables({
            dark: true,
          }),
          "primary-color": "#f48c31",
        },
        javascriptEnabled: true,
      },
    },
  },
});
