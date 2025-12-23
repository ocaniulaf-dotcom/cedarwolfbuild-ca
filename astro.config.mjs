// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  trailingSlash: "always",
  site: "https://cedarwolfbuild.ca",
  base: "/",
  vite: {
    plugins: [tailwindcss()],
  },
});
