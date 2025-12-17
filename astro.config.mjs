// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Optional but recommended for correct canonical URLs and sitemap.
  // Replace with your real GitHub Pages URL.
  // Example: https://oscarcaniulaf.github.io
  site: 'https://YOUR_GITHUB_USERNAME.github.io',

  // Your repo name.
  base: '/cedarwolfbuild-ca',

  vite: {
    plugins: [tailwindcss()],
  },
});
