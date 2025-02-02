//import tailwind.config.js
const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // tambah ini jika menggunakan @heroui/theme
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // hapus didalam brackret ini jika menggunakan @heroui/theme
    extend: {},
  },
  // tambah ini jika menggunakan @heroui/theme
  darkMode: "class",
  plugins: [heroui()],
};
