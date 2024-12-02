/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        'xs': ['.8125rem', { lineHeight: '1.5rem' }],
        'sm': ['.875rem', { lineHeight: '1.5rem' }]
      },
    },
  },
  plugins: [],
};
