/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lightblue': '#1B2A6E',
        'btncolor': 'EAEBEF'
        
      },
      boxShadow: {
        '3xl': '0 10px 50px 0px rgba(0, 0, 0, 0.15)',
      },
      width:{
        'calc': 'calc(100% - 256px)'
      }
    },
  },
  plugins: [],
}

