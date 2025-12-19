// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://cedarwolfbuild.ca",
  site: "https://cedarwolfbuild.ca",
  base: "/cedarwolfbuild-ca/",
  vite: {
    plugins: [tailwindcss()],
  },
});

