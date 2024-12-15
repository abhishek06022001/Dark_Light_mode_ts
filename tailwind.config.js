/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    // these are extending the colors here :)
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': {
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        'silver': '#ecebff',
        'bubble_gum': '#ff77e9',
        'bermuda': '#78dcca',
        primary: 'rgb(var(--color-primary))',
        secondary: 'rgb(var(--color-secondary))',
      },
    },
  },
  plugins: [],
}

