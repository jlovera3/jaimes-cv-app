/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
  content: [
    // Example content paths...
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      backgroundImage: {
        'banner': "url('public/pictures/banner.png')",
        'banner-notch': "url('public/pictures/banner-notch.png')",
      }
    },
    colors: {
      white: colors.white,
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss-animated')
  ],
}

