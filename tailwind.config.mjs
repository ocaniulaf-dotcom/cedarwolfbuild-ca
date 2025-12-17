/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f2fbf6",
          100: "#dbf5e6",
          200: "#b7ebcd",
          300: "#87dcae",
          400: "#4fc489",
          500: "#2ea86c",
          600: "#1f8657",
          700: "#1b6a47",
          800: "#17553a",
          900: "#124630",
        },
        wood: {
          50:  "#fbf7f2",
          100: "#f3e7d6",
          200: "#e6cfad",
          300: "#d7b27c",
          400: "#c8924e",
          500: "#b77a33",
          600: "#9a6126",
          700: "#7b4b20",
          800: "#623b1d",
          900: "#503118",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2,6,23,0.08)",
      },
    },
  },
  plugins: [],
};
