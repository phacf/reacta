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
        light: {
          primary: {
            '600': '#0800A8',
            '500': '#87888F',
            '450': '#57A8A8',
            '400': '#BFC7C8',
            '350': '#F3F4F4',
            '300': '#FFFFFF',
          }
        },
        dark: {
          primary: {
            '600': '#000080',  // Uma tonalidade mais escura do azul
            '500': '#4D4D4D',  // Cinza escuro
            '450': '#006666',  // Azul esverdeado escuro
            '400': '#808080',  // Cinza médio-escuro
            '350': '#CCCCCC',  // Cinza claro
            '300': '#E5E5E5',  // Cinza mais claro
          }
        },
        font: {
          '900': '#161616',
          '100': '#EEEFFA'
        }
      },
    },
  },
  plugins: [],
}

