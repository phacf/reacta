/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1600px',
    },
    opacity: {
      '0': '0',
      '20': '0.2',
      '40': '0.4',
      '60': '0.6',
      '80': '0.8',
      '100': '1',
    },
    extend: {
      colors: {
        light: {
          primary: {
            '700': '#0066CC',
            '600': '#0066CC',
            '550': '#0080FF',
            '500': '#B4CCB9',
            '400': '#DDE5DE',
            '300': '#EDEDED',
          }
        },
        dark: {
          primary: {
            '700': '#22335E',
            '600': '#2A3F6E',
            '550': '#395488',
            '500': '#5D7299',
            '400': '#829BB3',
            '300': '#A3B5C9',
          }
        },
      },
    },
  },
  plugins: [],
}

