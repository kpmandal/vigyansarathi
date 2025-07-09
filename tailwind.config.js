// tailwind.config.js
/**"@type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#F5F7FA', // Light Grey
        'accent': '#2962FF',     // Professional Blue
        'cta': '#FF6D00',         // Bright Orange
        'dark-text': '#1a202c',
      },
      fontFamily: {
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Useful for styling blog content
  ],
}
