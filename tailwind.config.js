/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mar': ['Marcellus', 'serif'],
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '20%': { opacity: '0' },
          '40%': { opacity: '0.3' },
          '60%': { opacity: '0.5' },
          '80%': { opacity: '0.9' },
          '100%': { opacity: '1' },
        }, fadeOut: {
          '100%': { opacity: '1' },
          '80%': { opacity: '0.9' },
          '60%': { opacity: '0.5' },
          '40%': { opacity: '0.3' },
          '20%': { opacity: '0' },
          '0%': { visibility: 'hidden' },
        }
      },
      animation:{
        fadeOut:'fadeOut 2s ease-in-out'
      }
    },
  },
  plugins: [],
}
