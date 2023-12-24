/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./src/**/*.{js,jsx,ts,tsx}"],
 theme: {
  extend: {
   screens: {
    "2xl": "1440px",
   },
   colors: {
    "light-cyan": "hsl(193, 38%, 86%)",
    "neon-green": "hsl(150, 100%, 66%)",
    "grayish-blue": "hsl(217, 19%, 38%)",
    "dark-greyish-blue": "hsl(217, 19%, 24%)",
    "dark-blue": "hsl(218, 23%, 16%)",
   },
   fontFamily: {
    "sans-serif": ["Manrope"],
   },
   fontWeight: {
    bold: 800,
   },
   fontSize: {
    "3xl": "1.75rem",
   },
  },
 },
 plugins: [],
};
