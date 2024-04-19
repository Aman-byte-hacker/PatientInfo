/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'customBlue': '#3a3af8',
      'brown': '#964B00',
      'lightPink': '#FFF4F2',
      'white': '#FFFFFF',
    },
    screens: {
      'sm': '360px',
      'md': '768px',
      'lg': '1280px',
      'xl': '1920px',
    },
    extend: {},
  },
  plugins: [],
}