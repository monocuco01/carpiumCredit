/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Esto es vital para que lea tus archivos de React
  ],
  theme: {
    extend: {
      colors: {
        'carpium-blue': '#001A33',
        'carpium-gold': '#E5C100',
        'carpium-gray': '#5A758D',
      },
    },
  },
  plugins: [],
}