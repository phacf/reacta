/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          700: '#72169E',
          600: '#8D11C3',
          500: '#A105D5',
          400: '#BD6DD9',
          300: '#F3D7FD',
          50: '#F3E5F5',
        },
        secondary: {
          700: '#244F52',
          600: '#236165',
          500: '#1A7478',
          400: '#21A0A9',
          300: '#21B6B9',
          200: '#3DD2D3',
          100: '#7ae6e5',
        },
        'eastern-blue': { // proposal secondary
          '50': '#d9f2f0',
          '100': '#d6f5f2',
          '200': '#a6e7e3',
          '300': '#70d2d0',
          '400': '#47aeae',
          '500': '#2e9c9e',
          '600': '#1e6d71',
          '700': '#1a4f51',
          '800': '#16393b',
          '900': '#13282a',
          '950': '#020708',
        },
        light: {
          700: '#503C4D',
          600: '#6F6671',
          550: '#A7A2A6',
          500: '#E4E1DE',
          400: '#F4F3F2',
          300: '#FEFEFE',
        }
      }
    },
  },
  plugins: [],
}

