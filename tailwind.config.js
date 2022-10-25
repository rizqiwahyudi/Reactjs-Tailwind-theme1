/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
	  "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Inter' : ['Inter', 'sans-serif'],
        'general-sans': ['general-sans', 'sans-serif'],
      }
    },
  },
  plugins: [require("daisyui")],
}
