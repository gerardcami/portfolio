/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Satoshi", ...fontFamily.sans],
        'header':["Onest", "Arial", "Liberation Sans", "sans-serif"],
      },
      fontSize: {
        'xs': ['.8125rem', { lineHeight: '1.5rem' }],
        'sm': ['.875rem', { lineHeight: '1.5rem' }]
      },
      colors: {
        'raisin-black': '#292524'
      }
          },
  },
  plugins: [],
};
