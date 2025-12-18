// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://oscarcaniulaf.github.io",
  base: "/cedarwolfbuild-ca/",
  vite: {
    plugins: [tailwindcss()],
  },
});

