/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      colors: {
        primary: "#ff0000",
      },
      spacing: {
        massive: '100rem',
      },
    },
  },
  plugins: [],
}

