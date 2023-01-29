/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      minHeight: {
        screen: ["100vh /* fallback for Opera, IE and etc. */", "100svh"],
      },
    },
  },
  plugins: [],
};
