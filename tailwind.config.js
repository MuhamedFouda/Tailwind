/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          400: '#FFC107',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '6xl': '6rem',
      },
      textDecoration: {
        underline: 'underline',
      },
    },
  },
  plugins: [],
}