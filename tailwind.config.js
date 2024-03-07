/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Microsoft regular"', 'sans-serif']
    },
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
        primary: {
          '900': '#161616',
          '700': '#bfb399',
          '650': '#fff7e5',
          '600': '#0800A8',
          '500': '#87888F',
          '450': '#038080',
          '400': '#C0C0C0',
          '350': '#F3F4F4',
          '200': '#EEEFFA',
          '100': '#FFFFFF',
        },

      },
    },
  },
  plugins: [],
}

