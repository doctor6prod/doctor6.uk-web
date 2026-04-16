import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";
import { FileSystemIconLoader } from "unplugin-icons/loaders";
import path from "path";

export default defineConfig(({ command }) => ({
  // Cambiado a '/' para que tu dominio doctor6.uk encuentre los archivos correctamente
  base: '/',
  
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    Components({
      resolvers: [
        IconsResolver({
          customCollections: ["fluency"],
          prefix: "i",
        }),
      ],
    }),
    WindiCSS(),
    Icons({
      customCollections: {
        fluency: FileSystemIconLoader("./public/icons/svg", (svg) =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')
             .replace(/fill=".*?"/g, 'fill="currentColor"')
        ),
      },
    }),
    vue(),
  ],
}));
